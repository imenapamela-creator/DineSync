import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/OrdersPage.css";

const adminLinks = [
  { label: "overview", icon: "home" },
  { label: "Menu", icon: "menu" },
  { label: "Order", icon: "order" },
];

const allOrders = [
  { id: "#QRD-1021", customer: "Aline Mugisha", items: "2 items", total: "FRW 16000", status: "Completed", time: "23:30" },
  { id: "#QRD-1022", customer: "Jean Nsengiyumva", items: "3 items", total: "FRW 23500", status: "Preparing", time: "22:10" },
  { id: "#QRD-1023", customer: "Claire Uwase", items: "1 items", total: "FRW 7800", status: "Pending", time: "18:45" },
  { id: "#QRD-1024", customer: "Emmanuel Habimana", items: "4 items", total: "FRW 44800", status: "Completed", time: "20:05" },
  { id: "#QRD-1025", customer: "Sophie Mukamana", items: "2 items", total: "FRW 12000", status: "Cancelled", time: "19:15" },
  { id: "#QRD-1026", customer: "Kevin Niyonzima", items: "3 items", total: "FRW 20700", status: "Preparing", time: "12:30" },
  { id: "#QRD-1027", customer: "Nadia Uwera", items: "1 items", total: "FRW 5200", status: "Pending", time: "13:50" },
  { id: "#QRD-1028", customer: "Eric Karemera", items: "5 items", total: "FRW 56000", status: "Completed", time: "21:20" },
  { id: "#QRD-1029", customer: "Beata Uwimana", items: "2 items", total: "FRW 11000", status: "Preparing", time: "17:00" },
  { id: "#QRD-1030", customer: "Samuel Iradukunda", items: "1 items", total: "FRW 4500", status: "Pending", time: "14:40" },
  { id: "#QRD-1031", customer: "Chantal Tuyizere", items: "3 items", total: "FRW 28500", status: "Completed", time: "16:15" },
  { id: "#QRD-1032", customer: "Patrick Bizimana", items: "2 items", total: "FRW 13500", status: "Cancelled", time: "11:55" },
  { id: "#QRD-1033", customer: "Diane Umutesi", items: "4 items", total: "FRW 32200", status: "Preparing", time: "19:40" },
  { id: "#QRD-1034", customer: "Fabrice Nkurunziza", items: "3 items", total: "FRW 24300", status: "Completed", time: "22:50" },
  { id: "#QRD-1035", customer: "Alice Niyonzima", items: "2 items", total: "FRW 9800", status: "Pending", time: "15:25" },
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
