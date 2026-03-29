import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import { FaCheckCircle } from "react-icons/fa";

const Booking_Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  if (!booking) return <p>No booking details found!</p>;

  const downloadInvoicePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Hotel Booking Invoice", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.text(`Booking Number: ${booking.bookingNumber}`, 20, 40);
    doc.text(`Guest Name: ${booking.guestName}`, 20, 50);
    doc.text(`Guest Contact: ${booking.guestContact}`, 20, 60);
    doc.text(`Guest Email: ${booking.guestEmail}`, 20, 70);
    doc.text(
      `Check-in: ${new Date(booking.checkIn).toLocaleDateString()}`,
      20,
      80
    );
    doc.text(
      `Check-out: ${new Date(booking.checkOut).toLocaleDateString()}`,
      20,
      90
    );
    doc.text(`Payment Status: ${booking.paymentStatus}`, 20, 100);
    doc.text(`Total Amount: ₹${booking.totalAmount}`, 20, 110);
    doc.save(`${booking.bookingNumber}_invoice.pdf`);
  };

  return (
    <div className="booking-success-page">
      <div className="booking-success-card">
        <div className="text-center mb-6">
          <FaCheckCircle className="booking-success-icon" />
          <h1>Booking Confirmed!</h1>
          <p className="subtitle">Thank you for your booking. Your payment was successful.</p>
        </div>

        <div className="booking-info-grid">
          <div className="booking-info-card">
            <p className="label">Booking Number</p>
            <p className="value">{booking.bookingNumber}</p>
          </div>
          <div className="booking-info-card">
            <p className="label">Payment Status</p>
            <p className="value">{booking.paymentStatus}</p>
          </div>
          <div className="booking-info-card">
            <p className="label">Guest Name</p>
            <p className="value">{booking.guestName}</p>
          </div>
          <div className="booking-info-card">
            <p className="label">Guest Contact</p>
            <p className="value">{booking.guestContact}</p>
          </div>
          <div className="booking-info-card">
            <p className="label">Guest Email</p>
            <p className="value">{booking.guestEmail}</p>
          </div>
          <div className="booking-info-card">
            <p className="label">Total Amount</p>
            <p className="value">₹{booking.totalAmount}</p>
          </div>
          <div className="booking-info-card">
            <p className="label">Check-in</p>
            <p className="value">{new Date(booking.checkIn).toLocaleDateString()}</p>
          </div>
          <div className="booking-info-card">
            <p className="label">Check-out</p>
            <p className="value">{new Date(booking.checkOut).toLocaleDateString()}</p>
          </div>
        </div>

        <table className="rooms-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Room Number</th>
              <th>Type</th>
              <th>Rate / Night</th>
            </tr>
          </thead>
          <tbody>
            {booking.rooms.map((r, i) => (
              <tr key={r._id}>
                <td>{i + 1}</td>
                <td>{r.roomNumber}</td>
                <td>{r.room.roomType}</td>
                <td>₹{r.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="booking-success-buttons">
          <button className="btn-invoice" onClick={downloadInvoicePDF}>
            Download Invoice
          </button>
          <button className="btn-bookings" onClick={() => navigate("/my-bookings")}>
            View My Bookings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking_Success;