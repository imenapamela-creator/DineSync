import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/RestaurantsPage.css";

const clientLinks = [
  { label: "Restaurants", icon: "🏠" },
  { label: "Favorites", icon: "❤️" },
  { label: "Profile", icon: "👤" },
];

const restaurants = [
  { id: 1, name: "La grande palace hotel" },
  { id: 2, name: "Italian resto" },
  { id: 3, name: "McDonalds" },
  { id: 4, name: "kigalicious" },
  { id: 5, name: "Nyamata" },
  { id: 6, name: "cafe camelia" },
];

const options = ["View All", "Description", "View near me"];

function RestaurantsPage({ onVisit }) {
  const [activeOption, setActiveOption] = useState("View All");

  return (
    <div className="admin-layout">
      <Sidebar links={clientLinks} activePage="Restaurants" onNavigate={() => {}} />

      <div className="admin-content">
        <h1 className="page-title">Restaurants</h1>

        <div className="menu-table-box">
          <div className="restaurant-grid-layout">
            <div className="options-panel">
              <p className="options-heading">Options</p>
              {options.map((opt) => (
                <p
                  key={opt}
                  className={`option-item ${activeOption === opt ? "active-option" : ""}`}
                  onClick={() => setActiveOption(opt)}
                >
                  {opt}
                </p>
              ))}
            </div>

            <div className="divider-line"></div>

            <div className="restaurant-grid">
              {restaurants.map((r) => (
                <div key={r.id} className="restaurant-card">
                  <div className="restaurant-card-img"></div>
                  <p className="restaurant-card-name">{r.name}</p>
                  <button className="btn-visit" onClick={() => onVisit && onVisit(r)}>
                    Visit
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantsPage;
