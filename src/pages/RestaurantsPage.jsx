import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/RestaurantsPage.css";
import grandeImg from "../assets/La grande palace hotel.png";
import italianImg from "../assets/italian resto.png";
import mcdonaldsImg from "../assets/mc donalds.png";
import kigaliciousImg from "../assets/kigalicious.png";
import nyamataImg from "../assets/Nyamata.png";
import cameliaImg from "../assets/cafe camelia.png";

const clientLinks = [
  { label: "Restaurants", icon: "restaurant" },
];

const restaurants = [
  { id: 1, name: "La grande palace hotel", image: grandeImg },
  { id: 2, name: "Italian resto", image: italianImg },
  { id: 3, name: "McDonalds", image: mcdonaldsImg },
  { id: 4, name: "Kigalicious", image: kigaliciousImg },
  { id: 5, name: "Nyamata", image: nyamataImg },
  { id: 6, name: "Cafe Camelia", image: cameliaImg },
];

const options = ["View All", "Description", "View near me"];

function RestaurantsPage() {
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState("View All");

  const handleVisit = (restaurant) => {
    navigate("/client-menu", { state: { restaurantName: restaurant.name } });
  };

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
                  <div className="restaurant-card-img">
                    <img src={r.image} alt={r.name} />
                  </div>
                  <p className="restaurant-card-name">{r.name}</p>
                  <button className="btn-visit" onClick={() => handleVisit(r)}>
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
