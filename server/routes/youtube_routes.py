from flask import Blueprint, jsonify
from services.youtube_service import start_youtube_gesture

youtube_bp = Blueprint("youtube_bp", __name__)

@youtube_bp.route("/start_youtube_gesture", methods=["GET"])
def start_youtube():
    try:
        start_youtube_gesture()  # call the function from youtube_service.py
        return jsonify({"message": "YouTube gesture control started successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
