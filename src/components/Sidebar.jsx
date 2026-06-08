import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar({ links, activePage }) {
  const navigate = useNavigate();

  const handleLinkClick = (label) => {
    // Converts label strings directly into your URL routes
    if (label.toLowerCase() === "overview") {
      navigate("/dashboard/overview");
    } else if (label.toLowerCase() === "menu") {
      navigate("/dashboard/menu");
    } else {
      console.log(`Route for ${label} not hooked up yet!`);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <span className="logo-dine">Dine</span>
        <span className="logo-sync">Sync</span>
        <span className="sidebar-menu-icon">☰</span>
      </div>

      <ul className="sidebar-links">
        {links.map((link) => (
          <li
            key={link.label}
            className={activePage.toLowerCase() === link.label.toLowerCase() ? "active" : ""}
            onClick={() => handleLinkClick(link.label)}
          >
            <span className="sidebar-icon">{link.icon}</span>
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