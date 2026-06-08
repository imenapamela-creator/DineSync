import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";
import "../styles/landingPage.css";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default LandingPage;