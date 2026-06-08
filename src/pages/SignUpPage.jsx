import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../components/Icons";
import "../styles/SignUpPage.css";
import restaurantImg from "../assets/log.png";
import logoImg from "../assets/LOGO.png";

function SignUpPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");

  function handleRoleClick(selectedRole) {
    setRole(selectedRole);
    if (selectedRole === "Admin") {
      navigate("/credentials");
    } else if (selectedRole === "Client") {
      navigate("/restaurants");
    }
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
              <Icon name="profile" className="input-icon" size={18} />
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
              <Icon name="profile" className="input-icon" size={18} />
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
              <Icon name="phone" className="phone-icon" size={18} />
              <span className="phone-code">+250</span>
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
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <Icon name="eye" size={18} />
              </button>
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
              onClick={() => handleRoleClick("Admin")}
            >
              Admin
            </button>
            <button
              className={`btn-role ${role === "Client" ? "selected" : ""}`}
              onClick={() => handleRoleClick("Client")}
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
