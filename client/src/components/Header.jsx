import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-items-center fs-3 fw-bold"
          href="#" style={{ paddingLeft: "15px" }}
        >
          <img
            src="/imgs/logo1.jpg" // replace with your logo path
            alt="Logo"
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          GestureMate
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          
          </ul>

          <form
            className="d-flex flex-column flex-lg-row mt-2 mt-lg-0"
            role="search"
          >
            <input
              className="form-control me-2 mb-2 mb-lg-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary me-2"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Login
            </button>
            <button
              className="btn btn-outline-success"
              onClick={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
