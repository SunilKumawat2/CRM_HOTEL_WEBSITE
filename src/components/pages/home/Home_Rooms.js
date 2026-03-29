import React, { useEffect, useState } from "react";
import { Get_Rooms_List } from "../../../api/global/Global";
import { IMG_BASE_URL } from "../../../config/Config";
import { useNavigate } from "react-router-dom";

const Home_Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const fetchRooms = async () => {
    try {
      const res = await Get_Rooms_List();
      setRooms(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch rooms", err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <section className="rooms-section">
      <div className="rooms-container">

        {/* Header */}
        <div className="rooms-header">
          <h5>Our Rooms</h5>
          <h2>Rooms & Luxury Suites</h2>
          <p>
            Discover our thoughtfully designed rooms and suites,
            crafted to provide maximum comfort and elegance.
          </p>
        </div>

        {/* Grid */}
        <div className="rooms-grid">
          {rooms?.slice(0,3)?.map((room) => {
            
            const price =
              room.discountedPrice > 0
                ? room.baseRate - room.discountedPrice
                : room.baseRate;

            return (
              <div className="room-card" key={room._id}>
                
                {/* IMAGE */}
                <div className="room-image">
                  <img
                    src={
                      room.images?.length > 0
                        ? `${IMG_BASE_URL}/uploads/photos/${room.images[0]}`
                        : "/default-room.jpg"
                    }
                    alt={room.roomType}
                  />

                  <span className="room-price">
                    ₹{price} / night
                  </span>
                </div>

                {/* CONTENT */}
                <div className="room-content">
                  <h3>
                    {room.roomType} Room ({room.roomNumber})
                  </h3>

                  {/* Amenities */}
                  <ul>
                    {room.amenities?.slice(0, 4).map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>

                  {/* ACTIONS */}
                  <div className="room-actions">
                    {/* <button
                      className="btn-outline"
                      onClick={() =>
                        navigate(`/room-details/${room._id}`)
                      }
                    >
                      View Details
                    </button> */}

                    <button
                      className="btn-primary"
                      onClick={() =>
                        navigate(`/room-details/${room._id}`)
                      }
                    >
                         View Details
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Home_Rooms;