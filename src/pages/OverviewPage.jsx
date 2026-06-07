import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/OverviewPage.css";

const adminLinks = [
  { label: "overview", icon: "🏠" },
  { label: "Menu", icon: "📋" },
  { label: "Order", icon: "🪑" },
  { label: "Bookings", icon: "🪑" },
  { label: "Settings", icon: "⚙️" },
  { label: "My account", icon: "👤" },
];

function StatCard({ label, value, change }) {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <h2 className="stat-value">{value}</h2>
      <p className="stat-change">{change}</p>
      <p className="stat-sub">from yesterday</p>
    </div>
  );
}

function OverviewPage() {
  return (
    <div className="admin-layout">
      <Sidebar links={adminLinks} activePage="overview" onNavigate={() => {}} />

      <div className="admin-content">
        <div className="overview-header">
          <h1>Overview</h1>
          <div className="overview-header-right">
            <div className="date-filter">May 15 - May 22 ▾</div>
            <button className="btn-download">Download report</button>
          </div>
        </div>

        <div className="stat-cards">
          <StatCard label="Table orders" value="125" change="+12.3%" />
          <StatCard label="Total revenue" value="200k rwf" change="+5.3%" />
          <StatCard label="Booked tables" value="12" change="+30%" />
          <StatCard label="New customers" value="125" change="+6.3%" />
        </div>

        <div className="overview-bottom">
          <div className="chart-box">
            <div className="chart-header">
              <h3>Orders overview</h3>
              <div className="week-filter">This week ▾</div>
            </div>
            <div className="chart-placeholder">
              <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c8651b" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#c8651b" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <path d="M0,140 C40,130 60,100 100,90 C140,80 160,95 200,70 C240,45 260,85 300,40 C340,10 380,20 420,25 C460,30 480,35 500,30 L500,160 L0,160 Z" fill="url(#chartGrad)" />
                <path d="M0,140 C40,130 60,100 100,90 C140,80 160,95 200,70 C240,45 260,85 300,40 C340,10 380,20 420,25 C460,30 480,35 500,30" fill="none" stroke="#c8651b" strokeWidth="2.5" />
              </svg>
              <div className="chart-labels">
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <span key={d}>{d}</span>)}
              </div>
            </div>
          </div>

          <div className="top-items-box">
            <h3>Top items</h3>
            <div className="top-item-row">
              <div className="top-item-img"></div>
              <span>85 orders</span>
            </div>
            <div className="top-item-row">
              <div className="top-item-img"></div>
              <span>70 orders</span>
            </div>
            <div className="top-item-row">
              <div className="top-item-img burger"></div>
              <span>42 orders</span>
            </div>
            <div className="top-item-row">
              <div className="top-item-img cake"></div>
              <span>37 orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
