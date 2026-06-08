import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Icon } from "../components/Icons";
import "../styles/ClientMenuPage.css";

const clientLinks = [
  { label: "Menu", icon: "menu" },
  { label: "Book a table", icon: "bookings" },
  { label: "My orders", icon: "order" },
  { label: "Favorites", icon: "favorites" },
  { label: "Profile", icon: "profile" },
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

function ClientMenuPage({ restaurantName: propRestaurantName }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All items");

  const selectedRestaurant = location.state?.restaurantName || propRestaurantName || "La grande palace hotel";

  const handleViewItem = (item) => {
    navigate("/view-item", { state: { item, restaurantName: selectedRestaurant } });
  };

  const handleOpenCart = () => {
    navigate("/cart", { state: { restaurantName: selectedRestaurant } });
  };

  const filtered = activeCategory === "All items"
    ? foodItems
    : foodItems.filter((f) => f.category === activeCategory);

  return (
    <div className="admin-layout">
      <Sidebar links={clientLinks} activePage="Menu" onNavigate={() => {}} />

      <div className="admin-content">
        <div className="client-menu-topbar">
          <h1 className="page-title">{selectedRestaurant}</h1>
          <div className="topbar-icons">
            <button type="button" className="icon-button" onClick={handleOpenCart} aria-label="Open cart">
              <Icon name="cart" size={20} />
            </button>
            <button type="button" className="icon-button" onClick={() => navigate(-1)} aria-label="Go back">
              <Icon name="back" size={20} />
            </button>
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
                      onClick={() => handleViewItem(item)}
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
