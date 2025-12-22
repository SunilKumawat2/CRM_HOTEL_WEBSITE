import React from "react";


const BookingBar = () => {
  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-field">
          <label>Check In</label>
          <input type="date" />
        </div>

        <div className="booking-field">
          <label>Check Out</label>
          <input type="date" />
        </div>

        <div className="booking-field">
          <label>Guests</label>
          <select>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>

        <div className="booking-field">
          <label>Room Type</label>
          <select>
            <option>Standard Room</option>
            <option>Deluxe Room</option>
            <option>Suite</option>
            <option>Presidential Suite</option>
          </select>
        </div>

        <button className="booking-btn">Check Availability</button>
      </div>
    </section>
  );
};

export default BookingBar;
