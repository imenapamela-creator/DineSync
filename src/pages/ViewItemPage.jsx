import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/ViewItemPage.css";

function ViewItemPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [qty, setQty] = useState(2);
  const item = location.state?.item;
  const restaurantName = location.state?.restaurantName;

  return (
    <div className="view-item-overlay">
      <div className="view-item-box">
        <div className="view-item-img"></div>

        <div className="view-item-body">
          <div className="view-item-left">
            <h2 className="view-item-name">{item ? item.name : "Chicken shawarma"}</h2>
            <p className="view-item-price">{item ? item.price : "4500rwf"}</p>
            <p className="view-item-desc-label">Description</p>
            <p className="view-item-desc">Creamy chicken shawarma with cream and chips and extra spice</p>

            <div className="view-item-buttons">
              <button className="btn-add-cart" onClick={() => navigate("/cart", { state: { restaurantName } })}>
                Add to cart
              </button>
              <button className="btn-back-item" onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>

          <div className="view-item-right">
            <p className="qty-label">Quantity</p>
            <div className="qty-controls">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <h3 className="custom-label">Customisation</h3>
            <p className="custom-option">Grilled chicken <span className="dot brown-dot">●</span></p>
            <p className="custom-option">Garva cream <span className="dot brown-dot">●</span></p>

            <button className="btn-more-options">More options</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewItemPage;
