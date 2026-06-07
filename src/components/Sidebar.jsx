import React from "react";
import "../styles/Sidebar.css";

function Sidebar({ links, onNavigate, activePage }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-dine">Dine</span>
        <span className="logo-sync">Sync</span>
        <span className="sidebar-menu-icon">☰</span>
      </div>

      <ul className="sidebar-links">
        {links.map((link) => (
          <li
            key={link.label}
            className={activePage === link.label ? "active" : ""}
            onClick={() => onNavigate(link.label)}
          >
            <span className="sidebar-icon">{link.icon}</span>
            <span>{link.label}</span>
          </li>
        ))}
      </ul>

      <div className="sidebar-bottom">
        <p>logout →</p>
        <p>Help ?</p>
      </div>
    </div>
  );
}

export default Sidebar;
