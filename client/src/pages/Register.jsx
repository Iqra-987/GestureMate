import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`User Registered:\n${form.fullname} - ${form.email}`);
  };

  return (
    <div
      className="container-fluid vh-100"
      style={{ backgroundColor: "#000000", paddingTop: "40px", paddingBottom: "40px" }}
    >
      <div className="row h-100 align-items-center">
        {/* Left Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg p-5 border-0 rounded-4"
            style={{
              maxWidth: "450px",
              width: "100%",
              backgroundColor: "#191919ff", // dark card
              color: "#ffffff", // white text inside
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <h2 className="text-center text-success fw-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter full name"
                  required
                />
              </div>

              {/* Username */}
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
                  placeholder="Choose a username"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter email"
                  required
                />
              </div>

              {/* Password */}
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
                  placeholder="Enter password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label fw-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Re-enter password"
                  required
                />
              </div>

              {/* Register Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-success btn-lg fw-bold rounded-3">
                  Register
                </button>
              </div>
            </form>

            {/* Login Link */}
            <p className="text-center mt-4 mb-0">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none text-primary fw-semibold">
                Login here
              </Link>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="col-md-6 d-none d-md-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#000000" }}
        >
          <img
            src="/imgs/regimg.jpg" // replace with your actual image
            alt="Register Illustration"
            className="img-fluid"
            style={{ maxWidth: "85%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
