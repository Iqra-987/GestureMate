import React, { useState, useEffect } from "react";

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-dark text-white mt-0 pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>About Us</h5>
            <p>
              GestureMate is committed to building modern web and desktop
              solutions to enhance productivity through gesture control.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
              <li><a href="/register" className="text-white text-decoration-none">Register</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#!" className="text-white text-decoration-none">Help Desk</a></li>
              <li><a href="#!" className="text-white text-decoration-none">Privacy</a></li>
              <li><a href="#!" className="text-white text-decoration-none">Terms</a></li>
            </ul>
          </div>

          {/* Live Date/Time */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Live Updates</h5>
            <p>
              📅 {dateTime.toLocaleDateString()} <br />
              ⏰ {dateTime.toLocaleTimeString()}
            </p>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Social Media */}
        <div className="text-center mb-3">
          <a className="text-white me-3" href="#!"><i className="fab fa-facebook-f"></i></a>
          <a className="text-white me-3" href="#!"><i className="fab fa-twitter"></i></a>
          <a className="text-white me-3" href="#!"><i className="fab fa-instagram"></i></a>
          <a className="text-white me-3" href="#!"><i className="fab fa-linkedin-in"></i></a>
          <a className="text-white" href="#!"><i className="fab fa-github"></i></a>
        </div>

        {/* Bottom Bar */}
        <div className="text-center py-3">
          © {new Date().getFullYear()} <strong>GestureMate</strong> | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
