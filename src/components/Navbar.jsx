import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="DineSync logo" className="logo-icon" />
        <span className="logo-text">
          <span className="logo-dine">Dine</span>
          <span className="logo-sync">Sync</span>
        </span>
      </div>

      <ul className="navbar-links">
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="navbar-auth">
        <a href="/login" className="btn-login">Login</a>
        <a href="/signup" className="btn-signup">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;