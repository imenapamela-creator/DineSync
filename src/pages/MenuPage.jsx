import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Icon } from "../components/Icons";
import "../styles/MenuPage.css";

const adminLinks = [
  { label: "overview", icon: "home" },
  { label: "Menu", icon: "menu" },
  { label: "Order", icon: "order" },
];

const menuItems = [
  { id: 1, name: "Cappuccino coffee", category: "Drinks", price: "5000rwf" },
  { id: 2, name: "Iced tea", category: "Drinks", price: "5000rwf" },
  { id: 3, name: "Baguette", category: "Main", price: "18000rwf" },
  { id: 4, name: "Cheese burger", category: "Main", price: "7000rwf" },
  { id: 5, name: "Vanilla cake", category: "Dessert", price: "5000rwf" },
  { id: 6, name: "Lemonade", category: "Drinks", price: "4200rwf" },
  { id: 7, name: "Grilled chicken", category: "Main", price: "15000rwf" },
  { id: 8, name: "Garlic bread", category: "Starters", price: "3200rwf" },
  { id: 9, name: "Mixed fruit tart", category: "Dessert", price: "5800rwf" },
  { id: 10, name: "Espresso shot", category: "Drinks", price: "2800rwf" },
  { id: 11, name: "Spaghetti bolognese", category: "Main", price: "12000rwf" },
  { id: 12, name: "Chicken wings", category: "Starters", price: "7600rwf" },
  { id: 13, name: "Chocolate brownie", category: "Dessert", price: "6000rwf" },
  { id: 14, name: "Mango smoothie", category: "Drinks", price: "4800rwf" },
  { id: 15, name: "Caesar salad", category: "Starters", price: "4200rwf" },
  { id: 16, name: "Beef steak", category: "Main", price: "22000rwf" },
  { id: 17, name: "Truffle fries", category: "Starters", price: "6500rwf" },
  { id: 18, name: "Cheesecake", category: "Dessert", price: "6200rwf" },
  { id: 19, name: "Matcha latte", category: "Drinks", price: "5300rwf" },
  { id: 20, name: "Fish tacos", category: "Main", price: "9400rwf" },
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
      <Sidebar links={adminLinks} activePage="Menu" />

      <div className="admin-content">
        <div className="menu-header">
          <h1>Menu</h1>
          <button className="btn-add-item">Add Item +</button>
        </div>

        <div className="search-bar">
          <Icon name="search" className="search-icon" size={18} />
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
                  <button className="btn-edit">
                    <Icon name="edit" size={16} /> Edit
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                    <Icon name="trash" size={16} /> Delete
                  </button>
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
