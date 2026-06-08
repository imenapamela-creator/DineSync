import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/LOGO.png"; // Updated asset reference name

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <img src={LogoImg} alt="DineSync System Corporate Brandmark" />
        <div className="logo-text">
          <span className="dine-black">Dine</span>
          <span className="sync-orange">Sync</span>
        </div>
      </div>

      <div className="navbar-links">
        <a href="#how-it-works">How it works</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contacts">Contacts</a>
      </div>

      <div className="navbar-actions">
        <button className="btn-nav-login" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn-nav-signup" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;