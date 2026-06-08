import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUpPage.css";
import restaurantImg from "../assets/log.png";
import logoImg from "../assets/LOGO.png";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");

  function handleSignUp() {
    console.log("Signing up as:", role, { firstName, lastName, phone, email });
  }

  return (
    <div className="signup-page">
      <div className="signup-left">
        <img src={restaurantImg} alt="restaurant" className="signup-bg" />
        <div className="signup-left-overlay">
          <div className="signup-logo">
            <img src={logoImg} alt="logo" className="logo-img" />
          </div>
          <div className="signup-left-text">
            <h1>
              <span className="text-white">Dine</span>
              <span className="text-orange">Sync</span>
            </h1>
            <p>
              <span className="text-orange">sync</span> your restaurant,
              <br />
              simplify your life
            </p>
            <div className="underline-bar"></div>
          </div>
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-form-box">
          <h2 className="signup-title">Create your account</h2>
          <p className="signup-subtitle">
            Get started with Dine<span className="brand-sync">Sync</span>
          </p>

          <div className="input-group">
            <label>First Name</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <div className="input-wrapper phone-wrapper">
              <span className="phone-code">📱 +250</span>
              <div className="phone-divider"></div>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email address</label>
            <div className="input-wrapper">
              <span className="input-icon">✉</span>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </span>
            </div>
            <div className="password-hints">
              <p>✅ Atleast 8 characters</p>
              <p>✅ Include a number</p>
              <p>✅ Include an uppercase letter</p>
            </div>
          </div>

          <p className="role-label">Sign Up as</p>
          <div className="role-buttons">
            <button
              className={`btn-role ${role === "Admin" ? "selected" : ""}`}
              onClick={() => setRole("Admin")}
            >
              Admin
            </button>
            <button
              className={`btn-role ${role === "Client" ? "selected" : ""}`}
              onClick={() => setRole("Client")}
            >
              Client
            </button>
          </div>

          <p className="login-text">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
