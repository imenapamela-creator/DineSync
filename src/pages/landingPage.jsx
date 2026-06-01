import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
    </div>
  );
}

export default LandingPage;