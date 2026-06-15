import { useState, useEffect } from "react";
import RestoooImg from "../assets/restooo.png";
import PhoneImg from "../assets/phone.png";
import PlateImg from "../assets/plate.png";

function FeaturesSection() {
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  // Changes active image scaling spotlight position every 2000ms (2 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlightIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="features-container">
      <div className="split-showcase">
        
        <div className="split-text-side">
          <h2 className="section-tagline">BUILT FOR RESTAURANTS AND DINERS</h2>
          <p className="split-paragraph">
            <span className="brand-highlight">DineSync</span> helps restaurants grow their 
            online presence while giving customers an easy way to discover restaurants, 
            reserve tables, and order food.
          </p>
          
          <button className="btn-explore">
            EXPLORE FEATURES &nbsp; →
          </button>

          <div className="stats-container-row">
            <div className="rating-block">
              <span className="star-rating-orange">★★★★★</span>
              <p className="rating-val">4.9/5 Rating</p>
            </div>
            <div className="stat-metric-box">
              <h3>1,200+</h3>
              <p>Restaurants</p>
            </div>
            <div className="stat-metric-box">
              <h3>12,000+</h3>
              <p>Orders</p>
            </div>
            <div className="stat-metric-box">
              <h3>3,000+</h3>
              <p>Reservations</p>
            </div>
          </div>
        </div>

        {/* Right Side Media Assembly with increased image sizes and tight spacing */}
        <div className="split-media-side">
          <div className="media-collage-wrap">
            <div className={`collage-img-frame img-restaurant-hall ${spotlightIndex === 0 ? "spotlight-active" : ""}`}>
              <img src={RestoooImg} alt="Restaurant Layout Area" />
            </div>
            <div className={`collage-img-frame img-phone-hand ${spotlightIndex === 1 ? "spotlight-active" : ""}`}>
              <img src={PhoneImg} alt="Mobile Integration Display" />
            </div>
            <div className={`collage-img-frame img-plate-served ${spotlightIndex === 2 ? "spotlight-active" : ""}`}>
              <img src={PlateImg} alt="Food Plating Presentation" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;