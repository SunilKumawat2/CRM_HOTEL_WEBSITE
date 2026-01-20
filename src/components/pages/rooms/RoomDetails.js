import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Get_Rooms_Details,
  Get_Rooms_Related,
} from "../../../api/global/Global";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { IMG_BASE_URL } from "../../../config/Config";
import MotionLoader from "../../common/motionloader/MotionLoader";

const RoomDetails = () => {
  const naviagte = useNavigate();
  const { _id } = useParams(); // 🔑 get ID from URL
  const [room, setRoom] = useState(null);
  const [related_room, setRelatedRoom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoomDetails();
    fetchRoomRelated();
  }, [_id]);

  const fetchRoomDetails = async () => {
    try {
      setLoading(true);
      const res = await Get_Rooms_Details(_id);
      setRoom(res.data);
    } catch (error) {
      console.error("Error fetching room details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRoomRelated = async () => {
    try {
      setLoading(true);
      const res = await Get_Rooms_Related(_id);
      setRelatedRoom(res?.data);
    } catch (error) {
      console.error("Error fetching room details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading room details...</p>;
  if (!room) return <p>No room data found</p>;

  const finalPrice =
    room.discountedPrice > 0
      ? room.baseRate - room.discountedPrice
      : room.baseRate;

  // 🔹 STATIC HOTEL VIDEOS
  const hotelVideos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
  ];

  return (
    <>
      <Header />
      {loading ? (
        <MotionLoader />
      ) : (
        <div className="room-details-container">
          {/* ================= ROOM IMAGE SLIDER ================= */}
          <div className="room-image-wrapper">
            <Swiper
              navigation
              loop
              className="room-image-slider"
              modules={[Navigation]}
            >
              {room?.images?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${IMG_BASE_URL}/${img}`}
                    alt={`Room Image ${index + 1}`}
                    className="room-main-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Overlay Content */}
            <div className="room-image-overlay">
              <h1>
                Room {room.roomNumber} – {room.roomType}
              </h1>
              <span className="rating">⭐ {room.rating}</span>
            </div>
          </div>

          {/* Price */}
          <div className="price-section">
            {room.discountedPrice > 0 ? (
              <>
                <span className="old-price">₹{room.baseRate}</span>
                <span className="new-price">₹{finalPrice}</span>
                <span className="discount">₹{room.discountedPrice} OFF</span>
              </>
            ) : (
              <span className="new-price">₹{room.baseRate}</span>
            )}
            <span className="per-night">/night</span>
          </div>

          {/* Info */}
          <div className="info-grid">
            <div>
              <strong>View:</strong> {room.roomView}
            </div>
            <div>
              <strong>Floor:</strong> {room.floorLevel}
            </div>
            <div>
              <strong>Bed:</strong> {room.bedType}
            </div>
            <div>
              <strong>Beds:</strong> {room.numberOfBeds}
            </div>
            <div>
              <strong>Adults:</strong> {room.maxAdults}
            </div>
            <div>
              <strong>Children:</strong> {room.maxChildren}
            </div>
            <div>
              <strong>Occupancy:</strong> {room.maxOccupancy}
            </div>
          </div>

          {/* Description */}
          {room.description && (
            <div className="section">
              <h3>Description</h3>
              <p dangerouslySetInnerHTML={{ __html: room.description }} />
            </div>
          )}

          {/* Amenities */}
          <div className="section">
            <h3>Amenities</h3>
            <ul className="tag-list">
              {room.amenities?.length ? (
                room.amenities.map((a, i) => <li key={i}>{a}</li>)
              ) : (
                <li>No amenities listed</li>
              )}
            </ul>
          </div>

          {/* Features */}
          <div className="section">
            <h3>Room Features</h3>
            <ul className="feature-list">
              {room.hasBalcony && <li>Balcony</li>}
              {room.hasLivingArea && <li>Living Area</li>}
              {room.bathtub && <li>Bathtub</li>}
              {room.jacuzzi && <li>Jacuzzi</li>}
              {room.hairDryer && <li>Hair Dryer</li>}
              {room.extraBedAllowed && <li>Extra Bed Allowed</li>}
              {room.nearElevator && <li>Near Elevator</li>}
            </ul>
          </div>

          {/* Accessibility */}
          <div className="section">
            <h3>Accessibility</h3>
            <ul className="feature-list">
              {room.wheelchairAccessible && <li>Wheelchair Accessible</li>}
              {room.groundFloor && <li>Ground Floor</li>}
              {room.seniorFriendly && <li>Senior Friendly</li>}
            </ul>
          </div>

          {/* Policies */}
          <div className="section">
            <h3>Policies</h3>
            <ul className="feature-list">
              {room.smokingAllowed && <li>Smoking Allowed</li>}
              {room.freeCancellation && <li>Free Cancellation</li>}
              {room.payAtHotel && <li>Pay at Hotel</li>}
              {room.refundable && <li>Refundable</li>}
              {room.earlyCheckin && <li>Early Check-in</li>}
              {room.lateCheckout && <li>Late Checkout</li>}
              {room.hourlyStay && <li>Hourly Stay</li>}
              {room.longStayFriendly && <li>Long Stay Friendly</li>}
            </ul>
          </div>

          {/* Seasonal Rates */}
          {room.seasonalRates?.length > 0 && (
            <div className="section">
              <h3>Seasonal Rates</h3>
              <table className="season-table">
                <thead>
                  <tr>
                    <th>Season</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {room.seasonalRates.map((s, i) => (
                    <tr key={i}>
                      <td>{s.seasonName}</td>
                      <td>{new Date(s.startDate).toLocaleDateString()}</td>
                      <td>{new Date(s.endDate).toLocaleDateString()}</td>
                      <td>₹{s.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Status */}
          <div className="section">
            <h3>Status</h3>
            <p>
              <strong>Available:</strong> {room.isAvailable ? "Yes" : "No"}
            </p>
            <p>
              <strong>Housekeeping:</strong> {room.housekeepingStatus}
            </p>
          </div>

          <button className="book-btn">Book Now</button>
          {/* ================= RELATED ROOMS ================= */}
          <div className="section">
            <h3 className="section-title">Related Rooms</h3>

            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              navigation
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Navigation]}
              className="related-room-slider"
            >
              {related_room &&
                related_room?.map((room) => (
                  <SwiperSlide key={room.id}>
                    <div className="related-room-card">
                      <img
                        src={`${IMG_BASE_URL}${room?.images[0]}`}
                        alt={room.roomType}
                        className="related-room-img"
                      />

                      <div className="related-room-info">
                        <h4>{room.roomType}</h4>
                        <p>₹{room.baseRate} / night</p>
                        <button
                          onClick={() => naviagte(`/room-details/${room._id}`)}
                          className="view-btn"
                        >
                          View Room
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          {/* ================= HOTEL VIDEOS ================= */}
          <div className="section">
            <h3 className="section-title">Hotel Videos</h3>

            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              navigation
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Navigation]}
              className="video-slider"
            >
              {hotelVideos.map((video, index) => (
                <SwiperSlide key={index}>
                  <video src={video} controls className="hotel-video" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default RoomDetails;
