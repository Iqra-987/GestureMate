import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${form.username}\nPassword: ${form.password}`);
  };

  return (
    <div
      className="container-fluid vh-100"
      style={{ backgroundColor: "#ffffff",paddingTop: "40px", // reduced top space
        paddingBottom: "40px" }}
    >
      <div
        className="row h-100 align-items-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Left Image */}
        <div
          className="col-md-6 d-none d-md-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#ffffff" }}
        >
          <img
            src="/imgs/loginfinal.gif"
            alt="Login Illustration"
            className="img-fluid"
            style={{
              maxWidth: "80%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg p-5 border-0 rounded-4"
            style={{
              maxWidth: "420px",
              width: "100%",
              backgroundColor: "#ffffff",
              marginRight: "150px",
              padding: "40px",borderRadius: "20px"
            }}
          >
            <h2 className="text-center text-primary fw-bold mb-4">
              Welcome Back
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label fw-semibold">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your username"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <a href="#" className="text-decoration-none small text-primary">
                  Forgot Password?
                </a>
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg fw-bold rounded-3"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-center mt-4 mb-0">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-decoration-none text-success fw-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
