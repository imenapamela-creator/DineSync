import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/MenuPage.css";

const adminLinks = [
  { label: "overview", icon: "🏠" },
  { label: "Menu", icon: "📋" },
  { label: "Order", icon: "🪑" },
  { label: "Bookings", icon: "🪑" },
  { label: "Settings", icon: "⚙️" },
  { label: "My account", icon: "👤" },
];

const menuItems = [
  { id: 1, name: "Capuccino coffee", category: "Drinks", price: "5000rwf" },
  { id: 2, name: "Iced Tea", category: "Drinks", price: "5000rwf" },
  { id: 3, name: "Bagu", category: "Main", price: "18000rwf" },
  { id: 4, name: "Cheese burger", category: "Main", price: "7000rwf" },
  { id: 5, name: "Vanilla cake", category: "Dessert", price: "5000rwf" },
];

const categories = ["All", "Starters", "Main", "Desserts", "Drink"];

function MenuPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(menuItems);

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const filtered = items.filter((item) => {
    const matchTab = activeTab === "All" || item.category.toLowerCase().includes(activeTab.toLowerCase());
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="admin-layout">
      <Sidebar links={adminLinks} activePage="Menu" onNavigate={() => {}} />

      <div className="admin-content">
        <div className="menu-header">
          <h1>Menu</h1>
          <button className="btn-add-item">Add Item +</button>
        </div>

        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="search menu items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="menu-table-box">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeTab === cat ? "active-tab" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="menu-table">
            <div className="table-header">
              <span>Item</span>
              <span>Category</span>
              <span>Price</span>
              <span>Action</span>
            </div>

            {filtered.map((item) => (
              <div key={item.id} className="table-row">
                <div className="item-cell">
                  <div className="item-img-placeholder"></div>
                  <span>{item.name}</span>
                </div>
                <span>{item.category}</span>
                <span>{item.price}</span>
                <div className="action-cell">
                  <button className="btn-edit">✏️ Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(item.id)}>🗑️ Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
