import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/OrdersPage.css";

const adminLinks = [
  { label: "overview", icon: "home" },
  { label: "Menu", icon: "menu" },
  { label: "Order", icon: "order" },
  { label: "Bookings", icon: "bookings" },
  { label: "Settings", icon: "settings" },
  { label: "My account", icon: "profile" },
];

const allOrders = [
  { id: "#QRD-1021", customer: "Aline Mugisha", items: "1 items", total: "FRW 16000", status: "Completed", time: "23:30" },
  { id: "#QRD-1021", customer: "Aline Mugisha", items: "1 items", total: "FRW 16000", status: "Preparing", time: "23:30" },
  { id: "#QRD-1021", customer: "Aline Mugisha", items: "1 items", total: "FRW 16000", status: "Completed", time: "23:30" },
  { id: "#QRD-1021", customer: "Aline Mugisha", items: "1 items", total: "FRW 16000", status: "Pending", time: "23:30" },
  { id: "#QRD-1021", customer: "Aline Mugisha", items: "1 items", total: "FRW 16000", status: "Cancelled", time: "23:30" },
];

const tabs = ["All", "Pending", "Preparing", "completed", "Cancelled"];

function StatusBadge({ status }) {
  const colorMap = {
    Completed: "#4caf50",
    Preparing: "#ff9800",
    Pending: "#aaa",
    Cancelled: "#e53935",
  };
  return (
    <span className="status-badge" style={{ backgroundColor: colorMap[status] || "#aaa" }}>
      {status}
    </span>
  );
}

function OrdersPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? allOrders
    : allOrders.filter((o) => o.status.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="admin-layout">
      <Sidebar links={adminLinks} activePage="Order" onNavigate={() => {}} />

      <div className="admin-content">
        <h1 className="orders-title">Orders</h1>

        <div className="menu-table-box">
          <div className="category-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active-tab" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="orders-table-header">
            <span>Order ID</span>
            <span>Customer</span>
            <span>Items</span>
            <span>Total</span>
            <span>Status</span>
            <span>Time</span>
          </div>

          {filtered.map((order, index) => (
            <div key={index} className="orders-table-row">
              <span>{order.id}</span>
              <span>{order.customer}</span>
              <span>{order.items}</span>
              <span>{order.total}</span>
              <StatusBadge status={order.status} />
              <span>{order.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
