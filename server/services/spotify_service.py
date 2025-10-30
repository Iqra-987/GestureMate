import cv2
import mediapipe as mp
import pyautogui
import webbrowser
import time
import pygetwindow as gw

def start_spotify_gesture():
    def focus_spotify():
        try:
            win_list = gw.getWindowsWithTitle("Spotify")
            if win_list:
                win_list[0].activate()
                time.sleep(0.2)
                return
            print("Spotify window not found or not active")
        except Exception as e:
            print(f"Could not focus Spotify: {e}")

    def pause_play():
        focus_spotify()
        pyautogui.press("playpause")

    def volume_up():
        focus_spotify()
        pyautogui.press("volumeup")

    def volume_down():
        focus_spotify()
        pyautogui.press("volumedown")

    def next_track():
        focus_spotify()
        pyautogui.press("nexttrack")

    def prev_track():
        focus_spotify()
        pyautogui.press("prevtrack")

    webbrowser.open("https://open.spotify.com")
    time.sleep(5)

    mp_hands = mp.solutions.hands
    hands = mp_hands.Hands(min_detection_confidence=0.7, min_tracking_confidence=0.7)
    mp_draw = mp.solutions.drawing_utils

    cap = cv2.VideoCapture(0)
    last_action = None

    while cap.isOpened():
        success, image = cap.read()
        if not success:
            continue
        image = cv2.flip(image, 1)
        rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = hands.process(rgb)
        h, w, _ = image.shape

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                mp_draw.draw_landmarks(image, hand_landmarks, mp_hands.HAND_CONNECTIONS)
                index_finger = hand_landmarks.landmark[8]
                thumb_finger = hand_landmarks.landmark[4]
                index_x, index_y = int(index_finger.x * w), int(index_finger.y * h)
                thumb_x, thumb_y = int(thumb_finger.x * w), int(thumb_finger.y * h)

                action = None
                if abs(index_x - thumb_x) < 40 and abs(index_y - thumb_y) < 40:
                    action = "Play/Pause"
                    if last_action != action:
                        pause_play()
                elif index_y < h // 4:
                    action = "Volume Up"
                    if last_action != action:
                        volume_up()
                elif index_y > (3 * h) // 4:
                    action = "Volume Down"
                    if last_action != action:
                        volume_down()
                elif index_x < int(w * 0.1):
                    action = "Previous Track"
                    if last_action != action:
                        prev_track()
                elif index_x > int(w * 0.9):
                    action = "Next Track"
                    if last_action != action:
                        next_track()

                if action:
                    cv2.putText(image, action, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 3)
                    last_action = action
                else:
                    last_action = None

        cv2.line(image, (w // 2, 0), (w // 2, h), (255, 0, 0), 2)
        cv2.imshow("Spotify Gesture Controller", image)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    cap.release()
    cv2.destroyAllWindows()
