def start_keyboard_gesture():
    import cv2
    import mediapipe as mp
    import time
    import pyautogui
    import webbrowser

    # --- Initialization ---
    mp_hands = mp.solutions.hands
    mp_draw = mp.solutions.drawing_utils
    hands = mp_hands.Hands(max_num_hands=1, min_detection_confidence=0.85)

    keys = [
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"],
        ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "BACKSPACE"],
        ["@", "#", "$", "%", "&", "*", "-", "+", "=", "`"],
        ["SHIFT", "CAPS", "SPACE", "ENTER"],
        ["YT", "SPOTIFY", "CHROME"]
    ]

    typed_text = ""
    last_key = ""
    last_time = 0
    delay = 0.5
    shift_on = False
    caps_on = False

    KEY_SIZE = 60
    X_START, Y_START = 50, 100

    def get_key_dimensions(key):
        width = KEY_SIZE
        if key in ["SPACE", "ENTER"]:
            width = KEY_SIZE * 3
        elif key in ["SHIFT", "CAPS"]:
            width = KEY_SIZE * 2
        elif key == "BACKSPACE":
            return int(KEY_SIZE * 1.5)
        return int(width)

    def draw_keyboard(frame, shift_on, caps_on):
        for i, row in enumerate(keys):
            for j, key in enumerate(row):
                x = X_START + j * KEY_SIZE
                y = Y_START + i * KEY_SIZE
                width = get_key_dimensions(key)
                color = (255, 0, 0)
                if (key == "SHIFT" and shift_on) or (key == "CAPS" and caps_on):
                    color = (0, 255, 255)
                cv2.rectangle(frame, (x, y), (x + width, y + KEY_SIZE), color, 2)
                cv2.putText(frame, key, (x + 10, y + 40), cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)
        return frame

    def get_key_at_coords(fx, fy):
        for i, row in enumerate(keys):
            for j, key in enumerate(row):
                x = X_START + j * KEY_SIZE
                y = Y_START + i * KEY_SIZE
                width = get_key_dimensions(key)
                if x < fx < x + width and y < fy < y + KEY_SIZE:
                    return key, x, y, width
        return None, 0, 0, 0

    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("Error: Could not open webcam.")
        return

    while True:
        success, frame = cap.read()
        if not success:
            break
        frame = cv2.flip(frame, 1)
        frame = cv2.resize(frame, (800, 600))
        h, w, _ = frame.shape
        img_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        result = hands.process(img_rgb)
        frame = draw_keyboard(frame, shift_on, caps_on)
        current_key_hover = None

        if result.multi_hand_landmarks:
            hand_landmarks = result.multi_hand_landmarks[0]
            mp_draw.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)
            index_tip = hand_landmarks.landmark[mp_hands.HandLandmark.INDEX_FINGER_TIP]
            fx = int(index_tip.x * w)
            fy = int(index_tip.y * h)
            cv2.circle(frame, (fx, fy), 12, (0, 255, 255), cv2.FILLED)
            key, x, y, width = get_key_at_coords(fx, fy)
            if key:
                cv2.rectangle(frame, (x, y), (x + width, y + KEY_SIZE), (0, 255, 0), -1)
                cv2.putText(frame, key, (x + 10, y + 40),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 2)
        cv2.imshow("🧠 Gesture Keyboard", frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
        time.sleep(0.01)

    cap.release()
    cv2.destroyAllWindows()
