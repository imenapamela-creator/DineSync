import { useNavigate } from "react-router-dom";
import { Icon } from "./Icons";
import "../styles/Sidebar.css";

function Sidebar({ links, activePage }) {
  const navigate = useNavigate();

  const handleLinkClick = (label) => {
    const normalized = label.toLowerCase();

    if (normalized === "overview") {
      navigate("/overview");
      return;
    }

    if (normalized === "menu") {
      navigate("/menu");
      return;
    }

    if (normalized === "order" || normalized === "my orders") {
      navigate("/orders");
      return;
    }

    if (normalized === "bookings" || normalized === "book a table") {
      navigate("/book-table");
      return;
    }

    if (normalized === "restaurants") {
      navigate("/restaurants");
      return;
    }

    if (normalized === "favorites") {
      navigate("/restaurants");
      return;
    }

    if (normalized === "profile") {
      navigate("/");
      return;
    }

    console.log(`Route for ${label} not hooked up yet!`);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <span className="logo-dine">Dine</span>
        <span className="logo-sync">Sync</span>
        <span className="sidebar-menu-icon"><Icon name="hamburger" size={20} /></span>
      </div>

      <ul className="sidebar-links">
        {links.map((link) => (
          <li
            key={link.label}
            className={activePage.toLowerCase() === link.label.toLowerCase() ? "active" : ""}
            onClick={() => handleLinkClick(link.label)}
          >
            <Icon name={link.icon} className="sidebar-icon" size={18} />
            <span>{link.label}</span>
          </li>
        ))}
      </ul>

      <div className="sidebar-bottom">
        <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>logout →</p>
        <p>Help ?</p>
      </div>
    </div>
  );
}

export default Sidebar;