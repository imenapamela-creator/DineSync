import React, { useState } from "react";
import "../styles/BookTablePage.css";

const totalSeats = 20;

function BookTablePage({ onBack }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [area, setArea] = useState("");
  const [selected, setSelected] = useState([3, 10]);
  const booked = [6, 7, 15, 16];

  function toggleSeat(seatNum) {
    if (booked.includes(seatNum)) return;
    if (selected.includes(seatNum)) {
      setSelected(selected.filter((s) => s !== seatNum));
    } else {
      setSelected([...selected, seatNum]);
    }
  }

  function getSeatStatus(num) {
    if (booked.includes(num)) return "booked";
    if (selected.includes(num)) return "selected";
    return "available";
  }

  return (
    <div className="book-table-page">
      <div className="book-left">
        <button className="back-arrow" onClick={onBack}>←</button>
        <h2 className="book-title">Book a table</h2>

        <div className="book-input-group">
          <label>Date</label>
          <div className="book-input-wrapper">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter date" />
            <span>🕐</span>
          </div>
        </div>

        <div className="book-input-group">
          <label>Time</label>
          <div className="book-input-wrapper">
            <select value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="">Select time</option>
              {["12:00","13:00","14:00","18:00","19:00","20:00"].map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <span>🕐</span>
          </div>
        </div>

        <div className="book-input-group">
          <label>Guests</label>
          <div className="book-input-wrapper">
            <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="Enter guests" />
          </div>
        </div>

        <div className="book-input-group">
          <label>Area preference</label>
          <div className="book-input-wrapper">
            <select value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">(optional)</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="vip">VIP</option>
            </select>
          </div>
        </div>

        <button className="btn-check">Check availability</button>
      </div>

      <div className="book-right">
        <button className="back-arrow-right" onClick={onBack}>←</button>
        <div className="seat-map">
          {Array.from({ length: totalSeats }, (_, i) => i + 1).map((num) => (
            <div
              key={num}
              className={`seat ${getSeatStatus(num)}`}
              onClick={() => toggleSeat(num)}
            >
              ⚙️
            </div>
          ))}
        </div>

        <div className="seat-legend">
          <div className="legend-item">
            <div className="legend-dot available-dot"></div>
            <span>Available</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot selected-dot"></div>
            <span>Selected</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot booked-dot"></div>
            <span>booked</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTablePage;
