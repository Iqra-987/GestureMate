import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/imgs/about.jpg" // replace with your actual image path
            alt="About GestureMate"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right text section */}
        <div className="col-md-6">
          <h2 className="mb-3 fw-bold">About Us</h2>
          <p className="text-muted fs-5">
            <strong>GestureMate</strong> was created with one simple goal — to
            make technology feel more natural and responsive. We are a team of
            passionate innovators who believe that communication with machines
            should be as seamless as a wave of your hand.
          </p>
          <p className="text-muted fs-5">
            Our system enables users to control applications like{" "}
            <strong>YouTube, Spotify, Media Player, and Keyboard</strong> through
            intuitive hand gestures. By combining <strong>Computer Vision</strong>{" "}
            and <strong>AI-powered recognition</strong>, GestureMate delivers a
            smart, touch-free way to interact with your digital world.
          </p>
          <p className="text-muted fs-5">
            What started as a small idea grew into a full-fledged system that
            blends creativity with real-world functionality. Every feature we’ve
            built is aimed at making digital interaction more accessible,
            engaging, and effortless.
          </p>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h4 className="fw-semibold mb-3">Our Mission</h4>
          <p className="text-muted fs-5">
            To revolutionize how people interact with technology by creating
            gesture-driven systems that are efficient, accessible, and human-friendly.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4 className="fw-semibold mb-3">Our Vision</h4>
          <p className="text-muted fs-5">
            To become a recognized innovator in gesture-based control systems,
            bridging the gap between people and machines through intelligent AI.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4 className="fw-semibold mb-3">Our Values</h4>
          <p className="text-muted fs-5">
            We believe in creativity, teamwork, and inclusivity — designing
            solutions that empower users and make technology feel personal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
