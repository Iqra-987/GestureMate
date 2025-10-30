from flask import Blueprint, jsonify
from services.spotify_service import start_spotify_gesture
import threading

spotify_bp = Blueprint("spotify_bp", __name__)

@spotify_bp.route("/api/spotify/start_spotify_gesture", methods=["GET"])
def spotify_gesture():
    try:
        # Run gesture code in a separate thread to keep Flask responsive
        thread = threading.Thread(target=start_spotify_gesture)
        thread.start()
        return jsonify({"message": "Spotify gesture started successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
