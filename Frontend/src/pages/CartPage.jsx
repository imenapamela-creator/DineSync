import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "../components/Icons";
import "../styles/CartPage.css";
import cheeseBurgerImg from "../assets/cheese burger.png";
import vanillaCakeImg from "../assets/vanilla cake.png";
import smoothieImg from "../assets/smoothie.png";

const initialItems = [
  { id: 1, name: "Cheese burger", price: 6000, qty: 1, image: cheeseBurgerImg },
  { id: 2, name: "Vanilla cake", price: 3000, qty: 1, image: vanillaCakeImg },
  { id: 3, name: "Smoothie", price: 4000, qty: 1, image: smoothieImg },
];

function CartPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const restaurantName = location.state?.restaurantName || "La grande palace hotel";
  const [items, setItems] = useState(initialItems);

  function updateQty(id, delta) {
    setItems(items.map((item) =>
      item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
    ).filter((item) => item.qty > 0));
  }

  return (
    <div className="cart-overlay">
      <div className="cart-box">
        <div className="cart-icon-top"><Icon name="cart" size={24} /></div>
        <div className="cart-header">
          <h2>Your cart</h2>
          <p>{items.length} items</p>
          <p className="cart-restaurant">{restaurantName}</p>
        </div>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">{item.price * item.qty}rwf</p>
              </div>
              <div className="cart-qty-controls">
                <button onClick={() => updateQty(item.id, -1)}>—</button>
                <button onClick={() => updateQty(item.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <p className="cart-more">MORE...</p>

        <div className="cart-buttons">
          <button className="btn-order">Order</button>
          <button className="btn-back-cart" onClick={() => navigate("/client-menu", { state: { restaurantName } })}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
