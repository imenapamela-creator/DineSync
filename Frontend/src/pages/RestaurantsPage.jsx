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
  { label: "Book a table", icon: "bookings" },
  { label: "Favorites", icon: "favorites" },
  { label: "Profile", icon: "profile" },
];

const restaurants = [
  { id: 1, name: "La Grande Palace Hotel", image: grandeImg },
  { id: 2, name: "Italian Resto", image: italianImg },
  { id: 3, name: "McDonald's", image: mcdonaldsImg },
  { id: 4, name: "Kigalicious", image: kigaliciousImg },
  { id: 5, name: "Nyamata Bistro", image: nyamataImg },
  { id: 6, name: "Cafe Camelia", image: cameliaImg },
  { id: 7, name: "Savanna Grill", image: grandeImg },
  { id: 8, name: "Rwanda Kitchen", image: italianImg },
  { id: 9, name: "Urban Spice", image: mcdonaldsImg },
  { id: 10, name: "Lagoon Lounge", image: kigaliciousImg },
  { id: 11, name: "Bamboo Sushi", image: nyamataImg },
  { id: 12, name: "Riverfront Dine", image: cameliaImg },
  { id: 13, name: "Mandazi House", image: grandeImg },
  { id: 14, name: "Sunset Terrace", image: italianImg },
  { id: 15, name: "Parkview Café", image: mcdonaldsImg },
  { id: 16, name: "Mountain View Grill", image: kigaliciousImg },
  { id: 17, name: "Heritage Table", image: nyamataImg },
  { id: 18, name: "Bella Cucina", image: cameliaImg },
  { id: 19, name: "Golden Wok", image: grandeImg },
  { id: 20, name: "Lotus Garden", image: italianImg },
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
