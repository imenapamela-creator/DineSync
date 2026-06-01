import React from "react";
import "../styles/Hero.css";

// These would be replaced with your actual food images
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";

function Hero() {
  return (
    <section className="hero">
      {/* Left side - text content */}
      <div className="hero-content">
        <p className="hero-tagline">
          <span className="dash">—</span>Sync your Restaurant,
        </p>
        <p className="hero-tagline">
          And <span className="highlight">orders</span>
        </p>
        <p className="hero-tagline-small">with</p>

        <h1 className="hero-title">
          <span className="title-dine">Dine</span>
          <span className="title-sync">Sync!</span>
        </h1>

        <p className="hero-users">join 800k+ users •</p>

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

      {/* Right side - food images */}
      <div className="hero-images">
        <img src={food1} alt="fresh salad" className="food-img food-top" />
        <img src={food2} alt="curry dish" className="food-img food-center" />
        <img src={food3} alt="pasta salad" className="food-img food-bottom" />
      </div>
    </section>
  );
}

export default Hero;