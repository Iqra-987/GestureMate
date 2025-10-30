import cv2
import mediapipe as mp
import pyautogui
import pygetwindow as gw
import time
import subprocess  

def start_mediaplayer_gesture():
    # --- Launch Windows Media Player automatically ---
    try:
        # Windows Media Player path
        subprocess.Popen([r"C:\Program Files\VideoLAN\VLC\vlc.exe"])

        print("🎬 Windows Media Player launched successfully.")
        time.sleep(3)  # wait before gesture detection starts
    except Exception as e:
        print(f"⚠️ Could not open Windows Media Player automatically: {e}")


    # --- Helper functions ---
    def focus_player():
        try:
            possible_titles = ["VLC", "Movies & TV", "Film & TV", "Media Player", "Video", "Movies"]
            for title in possible_titles:
                win_list = gw.getWindowsWithTitle(title)
                if win_list:
                    win = win_list[0]
                    win.activate()
                    time.sleep(0.2)
                    return
            print("⚠️ Could not detect standard player window.")
        except Exception as e:
            print(f"Could not focus window: {e}")

    def pause_play():
        focus_player()
        pyautogui.press("space")

    def volume_up():
        focus_player()
        pyautogui.press("volumeup")

    def volume_down():
        focus_player()
        pyautogui.press("volumedown")

    def next_video():
        focus_player()
        pyautogui.hotkey("n")

    def prev_video():
        focus_player()
        pyautogui.hotkey("p")

    def forward_video():
        focus_player()
        pyautogui.press("right")

    def backward_video():
        focus_player()
        pyautogui.press("left")

    # --- Mediapipe setup ---
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
                    action = "Previous Video"
                    if last_action != action:
                        prev_video()
                elif index_x > int(w * 0.9):
                    action = "Next Video"
                    if last_action != action:
                        next_video()
                elif index_x < w // 2:
                    action = "Backward"
                    if last_action != action:
                        backward_video()
                elif index_x >= w // 2:
                    action = "Forward"
                    if last_action != action:
                        forward_video()

                if action:
                    cv2.putText(image, action, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 3)
                    last_action = action
                else:
                    last_action = None

        cv2.line(image, (w // 2, 0), (w // 2, h), (255, 0, 0), 2)
        cv2.imshow("🎬 Media Player Gesture Controller", image)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    start_mediaplayer_gesture()
