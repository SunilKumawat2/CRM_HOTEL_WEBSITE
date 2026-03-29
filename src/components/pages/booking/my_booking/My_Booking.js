// src/components/pages/booking/My_Booking.jsx
import React, { useEffect, useState } from "react";
import { UsergetMyBookings } from "../../../../api/rooms/Rooms";
import jsPDF from "jspdf";
import Header from "../../../common/header/Header";
import Footer from "../../../common/footer/Footer";
import { IMG_BASE_URL } from "../../../../config/Config";

const My_Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await UsergetMyBookings();
        if (res.success) setBookings(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const downloadInvoicePDF = (booking) => {
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

  if (loading)
    return <p className="text-center mt-5">Loading your bookings...</p>;

  if (bookings.length === 0)
    return <p className="text-center mt-5">No bookings found.</p>;

  return (
    <>
      <Header />

      <div className="container-fluid py-5">

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle shadow">
            <thead className="table-dark text-center">
              <tr>
                <th>#</th>
                <th>Booking ID</th>
                <th>Guest</th>
                <th>Room</th>
                <th>Image</th>
                <th>Dates</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Invoice</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) =>
                booking.rooms.map((r, i) => (
                  <tr key={`${booking._id}-${i}`}>
                    <td className="text-center">{index + 1}</td>

                    <td>
                      <strong>{booking.bookingNumber}</strong>
                    </td>

                    <td>
                      {booking.guestName}
                      <br />
                      <small>{booking.guestContact}</small>
                    </td>

                    <td>
                      Room {r.roomNumber}
                      <br />
                      <small className="text-muted">
                        {r.room.roomType}
                      </small>
                    </td>

                    {/* ✅ IMAGE */}
                    <td className="text-center">
                      <img
                        src={`${IMG_BASE_URL}/uploads/photos/${r.room.images[0]}`}
                        alt="room"
                        className="img-thumbnail"
                        style={{
                          width: "90px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </td>

                    {/* ✅ DATES */}
                    <td>
                      <small>
                        <strong>IN:</strong>{" "}
                        {new Date(booking.checkIn).toLocaleDateString()}
                      </small>
                      <br />
                      <small>
                        <strong>OUT:</strong>{" "}
                        {new Date(booking.checkOut).toLocaleDateString()}
                      </small>
                    </td>

                    {/* ✅ AMOUNT */}
                    <td className="fw-bold text-success">
                      ₹{booking.totalAmount}
                    </td>

                    {/* ✅ STATUS */}
                    <td className="text-center">
                      <span
                        className={`badge ${
                          booking.status === "confirmed"
                            ? "bg-success"
                            : booking.status === "cancelled"
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {booking.status}
                      </span>
                      <br />
                      <small
                        className={
                          booking.paymentStatus === "paid"
                            ? "text-success fw-bold"
                            : "text-danger fw-bold"
                        }
                      >
                        {booking.paymentStatus}
                      </small>
                    </td>

                    {/* ✅ DOWNLOAD */}
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => downloadInvoicePDF(booking)}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default My_Booking;