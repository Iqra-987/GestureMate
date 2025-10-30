import React from "react";

function Slider() {
  return (
    <section
      className="d-flex flex-column justify-content-center"
      style={{
        backgroundColor: "#000000ff",
        color: "white",
        minHeight: "600px", // make slider taller
        padding: "80px 0",   // more vertical padding
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Main Text */}
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-2" style={{ marginTop: "-40px" }}>
              Your hands speak,
            </h1>
            <h1 className="display-4 fw-bold mb-3">
              and the world obeys
            </h1>
            <p className="fw-bold fs-2 mb-0">- control made effortless</p>
          </div>

          {/* Right: GIF */}
          <div className="col-lg-6 text-center">
            <img
              src="/public/imgs/hand.gif" 
              alt="Hand gesture GIF"
              className="img-fluid"
              style={{ maxHeight: "1000px", borderRadius: "0px" , marginTop: "-50px" }}
            />
          </div>
        </div>

        {/* Paragraph below GIF */}
        <div className="row mt-5">
          <div className="col text-center">
            <p className="lead">
              GestureMate interprets your hand gestures and controls your favorite apps seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
