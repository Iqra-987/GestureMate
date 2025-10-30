from flask import Flask, jsonify
from flask_cors import CORS

# Import Blueprints
from routes.youtube_routes import youtube_bp
from routes.spotify_routes import spotify_bp
from routes.mediaplayer_routes import mediaplayer_bp
from routes.keyboard_routes import keyboard_bp

app = Flask(__name__)
CORS(app)

# Register all Blueprints (each with its own URL prefix)
app.register_blueprint(youtube_bp, url_prefix="/api/youtube")
app.register_blueprint(spotify_bp, url_prefix="/api/spotify")
app.register_blueprint(mediaplayer_bp, url_prefix="/api/mediaplayer")
app.register_blueprint(keyboard_bp, url_prefix="/api/keyboard")

@app.route("/")
def home():
    return jsonify({"message": "GestureMate server running successfully!"})

if __name__ == "__main__":
    app.run(debug=True)
