import React from "react";
import Slider from "../components/Slider";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      {/* Slider Section */}
      <Slider />

      {/* Products Section */}
      <div className="bg-black text-white pt-1 pb-5">
      <div className="container my-5">
        <h2 className="text-center">Our Products</h2>
        <div className="row g-4">
          <div className="col-sm-6 col-md-3">
            <Products
              imgSrc="/imgs/youtube.png"
              title="YouTube"
              text="Try YouTube with GestureMate – hands-free control!"
              btnText="Explore"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <Products
              imgSrc="/imgs/spotify.png"
              title="Spotify"
              text="Play, pause, and vibe with gestures on Spotify."
              btnText="Explore"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <Products
              imgSrc="/imgs/mediaplayer.jpg"
              title="Media Player"
              text="Control movies and music effortlessly."
              btnText="Explore"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <Products
              imgSrc="/imgs/keyboard.jpg"
              title="Keyboard"
              text="Type smarter with gesture-powered input."
              btnText="Explore"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
