import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";
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
          <Icon name="email" className="input-icon" size={18} />
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
          <Icon name="lock" className="input-icon" size={18} />
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
        {[
          { label: "Google", icon: "google" },
          { label: "Apple", icon: "apple" },
          { label: "Facebook", icon: "facebook" },
          { label: "Instagram", icon: "instagram" },
          { label: "LinkedIn", icon: "linkedin" },
          { label: "X", icon: "x" },
        ].map((provider) => (
          <button key={provider.label} className="btn-social">
            <Icon name={provider.icon} size={18} />
            Continue with {provider.label}
          </button>
        ))}
      </div>

      <p className="signup-text">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginForm;