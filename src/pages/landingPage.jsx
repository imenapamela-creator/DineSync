import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../styles/landingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
    </div>
  );
}

export default LandingPage;