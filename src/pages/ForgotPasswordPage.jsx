import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginPage.css";
import logoImg from "../assets/LOGO.png";
import restaurantImg from "../assets/log.png";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  function handleReset() {
    console.log("Password reset requested for:", email);
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <img src={restaurantImg} alt="restaurant" className="restaurant-bg" />
        <div className="login-left-overlay center-content">
          <div className="login-logo">
            <img src={logoImg} alt="logo" className="logo-img" />
          </div>
          <div className="login-left-text">
            <h1>
              <span className="text-white">Dine</span>
              <span className="text-orange">Sync</span>
            </h1>
            <p>
              Reset your password and get back to managing your restaurant.
            </p>
            <div className="underline-bar"></div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-box">
          <h2 className="login-title">Forgot Password</h2>
          <p className="login-subtitle">
            Enter your email and we will send you a reset link.
          </p>

          <div className="input-group">
            <label>Email address</label>
            <div className="input-wrapper">
              <span className="input-icon">✉</span>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button className="btn-login" onClick={handleReset}>
            Send reset link
          </button>

          <p className="signup-text">
            Remembered your password? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
