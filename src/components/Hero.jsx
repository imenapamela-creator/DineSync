import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

// Imported Assets
import food1 from "../assets/dish1.png"; 
import food2 from "../assets/dish2.png"; 
import food3 from "../assets/dish3.png"; 

function FeatureCard({ icon, label }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <p className="feature-label">{label}</p>
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-wrapper">
      <section className="hero">
        
        {/* Left Informational Column */}
        <div className="hero-content">
          <div className="headline-container">
            <span className="dash"></span>
            <h1 className="hero-title">
              Sync your Restaurant,<br />
              simplify your <span className="highlight">life</span>
            </h1>
          </div>

          <p className="hero-description">
            Manage menus, orders, tables and more- all in one smart platform
          </p>

          <div className="hero-buttons">
            <button className="btn-get-started" onClick={() => navigate("/signup")}>
              Get Started &nbsp; →
            </button>
            <a href="#learn-more" className="btn-learn-more">
              Learn more
            </a>
          </div>

          <div className="feature-cards">
            <FeatureCard 
              label="Easy Menu Management" 
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              } 
            />
            <FeatureCard 
              label="Real-time Orders" 
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              } 
            />
            <FeatureCard 
              label="Table Booking" 
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              } 
            />
            <FeatureCard 
              label="Analytics & Reports" 
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              } 
            />
          </div>
        </div>

        {/* Right Graphical Visual Showcase Panel */}
        <div className="hero-graphic-showcase">
          <svg className="svg-background-shape" viewBox="0 0 500 600" preserveAspectRatio="none">
            <path d="M 100 300 L 500 40 L 500 560 Z" fill="#5C251E" />
          </svg>

          <div className="showcase-dot dot-top-left"></div>
          <div className="showcase-dot dot-mid-left"></div>
          <div className="showcase-dot dot-low-left"></div>
          <div className="showcase-dot dot-bottom-center"></div>

          <div className="plate-outer-ring ring-top">
            <div className="plate-inner-frame">
              <img src={food1} alt="Green Salad Plate Component View" />
            </div>
          </div>
          
          <div className="plate-outer-ring ring-center">
            <div className="plate-inner-frame">
              <img src={food2} alt="Pasta Component View" />
            </div>
          </div>
          
          <div className="plate-outer-ring ring-bottom">
            <div className="plate-inner-frame">
              <img src={food3} alt="Curry Component View" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Hero;