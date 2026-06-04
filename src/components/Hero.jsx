import React from "react";
import "../styles/Hero.css";

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
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tagline">
            <span className="dash">—</span>Sync your Restaurant,
          </p>
          <p className="hero-tagline">
            simplify your <span className="highlight">life</span>
          </p>

          <p className="hero-description">
            Manage menus, orders, tables and more-
            <br />
            all in one smart platform
          </p>

          <div className="hero-buttons">
            <a href="/signup" className="btn-get-started">
              Get Started &nbsp; →
            </a>
            <a href="#learn-more" className="btn-learn-more">
              Learn more
            </a>
          </div>
        </div>

        <div className="hero-images">
          <img src={food1} alt="fresh salad" className="food-img food-top" />
          <img src={food2} alt="curry dish" className="food-img food-center" />
          <img src={food3} alt="pasta salad" className="food-img food-bottom" />
        </div>
      </section>

      <div className="feature-cards">
        <FeatureCard icon="🍽️" label="Easy Menu Management" />
        <FeatureCard icon="🧾" label="Real-time Orders" />
        <FeatureCard icon="📅" label="Table Booking" />
      </div>
    </div>
  );
}

export default Hero;