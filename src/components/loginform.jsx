import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("Logging in with:", email, password);
  }

  return (
    <div className="login-form-box">
      <h2 className="login-title">Welcome back</h2>
      <p className="login-subtitle">
        log in to your <span className="brand-name">Dine<span className="brand-sync">Sync</span></span> account.
      </p>

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
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/forgot-password" className="forgot-link">forgot password?</Link>
      </div>

      <button className="btn-login" onClick={handleLogin}>
        Login In
      </button>

      <div className="divider">
        <span></span>
        <p>or continue with</p>
        <span></span>
      </div>

      <div className="social-buttons">
        <button className="btn-social">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
          Continue with Google
        </button>
        <button className="btn-social">
          <img src="https://www.svgrepo.com/show/452234/apple.svg" alt="Apple" />
          Continue with Apple
        </button>
      </div>

      <p className="signup-text">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginForm;