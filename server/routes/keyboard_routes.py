from flask import Blueprint, jsonify
from services.keyboard_service import start_keyboard_gesture
import threading

keyboard_bp = Blueprint("keyboard", __name__)

@keyboard_bp.route("/api/keyboard/start_keyboard_gesture", methods=["GET"])
def start_keyboard_gesture_route():
    try:
        thread = threading.Thread(target=start_keyboard_gesture)
        thread.start()
        return jsonify({"message": "Keyboard Gesture Control started!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
