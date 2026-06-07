import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/ClientMenuPage.css";

const clientLinks = [
  { label: "Menu", icon: "📋" },
  { label: "Book a table", icon: "🪑" },
  { label: "My orders", icon: "🪑" },
  { label: "Favorites", icon: "❤️" },
  { label: "Profile", icon: "👤" },
];

const categories = ["All items", "Main dish", "Starter", "Desserts", "Drinks"];

const foodItems = [
  { id: 1, name: "Chicken shawarma", price: "4500rwf", category: "Main dish" },
  { id: 2, name: "Caesar salad", price: "3000rwf", category: "Starter" },
  { id: 3, name: "beef pizza", price: "10000rwf", category: "Main dish" },
  { id: 4, name: "Latte", price: "2700rwf", category: "Drinks" },
  { id: 5, name: "Smoothie", price: "4500rwf", category: "Drinks" },
  { id: 6, name: "fruit salad", price: "2000rwf", category: "Starter" },
];

function ClientMenuPage({ restaurantName, onViewItem, onCartClick }) {
  const [activeCategory, setActiveCategory] = useState("All items");

  const filtered = activeCategory === "All items"
    ? foodItems
    : foodItems.filter((f) => f.category === activeCategory);

  return (
    <div className="admin-layout">
      <Sidebar links={clientLinks} activePage="Menu" onNavigate={() => {}} />

      <div className="admin-content">
        <div className="client-menu-topbar">
          <h1 className="page-title">{restaurantName || "La grande palace hotel"}</h1>
          <div className="topbar-icons">
            <span className="cart-icon" onClick={onCartClick}>🛒</span>
            <span className="back-icon">←</span>
          </div>
        </div>

        <div className="menu-table-box">
          <div className="client-menu-layout">
            <div className="options-panel">
              <p className="options-heading">Categories</p>
              {categories.map((cat) => (
                <p
                  key={cat}
                  className={`option-item ${activeCategory === cat ? "active-option" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </p>
              ))}
            </div>

            <div className="divider-line"></div>

            <div className="food-grid">
              {filtered.map((item) => (
                <div key={item.id} className="food-card">
                  <div className="food-card-img"></div>
                  <p className="food-card-name">{item.name}</p>
                  <div className="food-card-footer">
                    <span className="food-card-price">{item.price}</span>
                    <button
                      className="btn-add"
                      onClick={() => onViewItem && onViewItem(item)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientMenuPage;
