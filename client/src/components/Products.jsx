import React from "react";

function Products(props) {
  const handleClick = async () => {
    try {
      let endpoint = "";

      // Match button title to backend API routes
      if (props.title === "YouTube") {
        endpoint = "http://localhost:5000/api/youtube/start_youtube_gesture";
      } else if (props.title === "Spotify") {
        endpoint = "http://localhost:5000/api/spotify/start_spotify_gesture";
      } else if (props.title === "Media Player") {
        endpoint = "http://localhost:5000/api/mediaplayer/start_mediaplayer_gesture";
      } else if (props.title === "Keyboard") {
        endpoint = "http://localhost:5000/api/keyboard/start_keyboard_gesture";
      }

      if (endpoint) {
        const response = await fetch(endpoint);
        const data = await response.json();
        alert(data.message || `${props.title} gesture started!`);
      } else {
        alert(`${props.title} feature coming soon!`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to start the feature.");
    }
  };

  return (
    <div className="card h-100 shadow-sm text-center">
      <img
        src={props.imgSrc}
        className="card-img-top p-3"
        alt={props.title}
        style={{ height: "120px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <button onClick={handleClick} className="btn btn-primary mt-auto">
          {props.btnText}
        </button>
      </div>
    </div>
  );
}

export default Products;
