import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Icon } from "../components/Icons";
import "../styles/ClientMenuPage.css";
import shawarmaImg from "../assets/shawarma.png";
import caesarSaladImg from "../assets/caesar salad.png";
import pizzaImg from "../assets/pizza.png";
import latteImg from "../assets/latte.png";
import smoothieImg from "../assets/smoothie.png";
import fruitSaladImg from "../assets/fruit salad.png";

const clientLinks = [
  { label: "Restaurants", icon: "restaurant" },
  { label: "Book a table", icon: "bookings" },
  { label: "Favorites", icon: "favorites" },
  { label: "Profile", icon: "profile" },
];

const categories = ["All items", "Main dish", "Starter", "Desserts", "Drinks"];

const foodItems = [
  { id: 1, name: "Chicken shawarma", price: "4500rwf", category: "Main dish", image: shawarmaImg },
  { id: 2, name: "Caesar salad", price: "3000rwf", category: "Starter", image: caesarSaladImg },
  { id: 3, name: "Beef pizza", price: "10000rwf", category: "Main dish", image: pizzaImg },
  { id: 4, name: "Latte", price: "2700rwf", category: "Drinks", image: latteImg },
  { id: 5, name: "Smoothie", price: "4500rwf", category: "Drinks", image: smoothieImg },
  { id: 6, name: "Fruit salad", price: "2000rwf", category: "Starter", image: fruitSaladImg },
  { id: 7, name: "Grilled tilapia", price: "12000rwf", category: "Main dish", image: shawarmaImg },
  { id: 8, name: "Avocado toast", price: "3800rwf", category: "Starter", image: caesarSaladImg },
  { id: 9, name: "Chocolate mousse", price: "5200rwf", category: "Desserts", image: fruitSaladImg },
  { id: 10, name: "Iced coffee", price: "2900rwf", category: "Drinks", image: latteImg },
  { id: 11, name: "Beef burger", price: "9800rwf", category: "Main dish", image: pizzaImg },
  { id: 12, name: "Spring rolls", price: "3200rwf", category: "Starter", image: smoothieImg },
  { id: 13, name: "Vanilla panna cotta", price: "5400rwf", category: "Desserts", image: fruitSaladImg },
  { id: 14, name: "Herbal tea", price: "2200rwf", category: "Drinks", image: latteImg },
  { id: 15, name: "Quinoa bowl", price: "8600rwf", category: "Main dish", image: caesarSaladImg },
  { id: 16, name: "Crepe suzette", price: "6300rwf", category: "Desserts", image: fruitSaladImg },
  { id: 17, name: "Mango juice", price: "2700rwf", category: "Drinks", image: smoothieImg },
  { id: 18, name: "Tomato bruschetta", price: "3100rwf", category: "Starter", image: caesarSaladImg },
  { id: 19, name: "Lamb chops", price: "15500rwf", category: "Main dish", image: pizzaImg },
  { id: 20, name: "Berry parfait", price: "4700rwf", category: "Desserts", image: fruitSaladImg },
  { id: 21, name: "Ginger ale", price: "2400rwf", category: "Drinks", image: latteImg },
  { id: 22, name: "Veggie wrap", price: "7200rwf", category: "Main dish", image: shawarmaImg },
  { id: 23, name: "Garlic bread", price: "2800rwf", category: "Starter", image: caesarSaladImg },
  { id: 24, name: "Banana bread", price: "3600rwf", category: "Desserts", image: fruitSaladImg },
  { id: 25, name: "Hot chocolate", price: "3300rwf", category: "Drinks", image: latteImg },
  { id: 26, name: "Beef stew", price: "12800rwf", category: "Main dish", image: pizzaImg },
  { id: 27, name: "Caprese salad", price: "3900rwf", category: "Starter", image: caesarSaladImg },
  { id: 28, name: "Cheesecake", price: "5600rwf", category: "Desserts", image: fruitSaladImg },
  { id: 29, name: "Mineral water", price: "1700rwf", category: "Drinks", image: smoothieImg },
  { id: 30, name: "Chicken wings", price: "8400rwf", category: "Main dish", image: shawarmaImg },
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
      <Sidebar links={clientLinks} activePage="Book a table" />

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
                  <div className="food-card-img">
                    <img src={item.image} alt={item.name} />
                  </div>
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
