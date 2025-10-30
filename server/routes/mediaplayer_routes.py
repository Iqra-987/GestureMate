from flask import Blueprint, jsonify
from services.mediaplayer_service import start_mediaplayer_gesture
import threading

mediaplayer_bp = Blueprint("mediaplayer", __name__)

@mediaplayer_bp.route("/api/mediaplayer/start_mediaplayer_gesture", methods=["GET"])
def start_mediaplayer():
    try:
        thread = threading.Thread(target=start_mediaplayer_gesture)
        thread.start()
        return jsonify({"message": "Media Player Gesture Control started!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
