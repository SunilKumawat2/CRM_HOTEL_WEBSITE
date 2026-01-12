import React, { useEffect, useState } from "react";
import {
  FaWifi,
  FaTv,
  FaSwimmer,
  FaGlassMartiniAlt,
  FaBed,
  FaUsers,
} from "react-icons/fa";
import "../../../assets/style.css";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { Get_Rooms_List } from "../../../api/global/Global"; // adjust path
import img1 from "../../../assets/images/login_bg.jpg"
import { useNavigate } from "react-router-dom";
const Rooms = () => {
    const navigate = useNavigate();
  const [filters, setFilters] = useState({
    roomType: "",
    roomView: "",
    floorLevel: "",
    baseRate: "",
    maxAdults: "",
    maxChildren: "",
    bedType: "",
    amenities: [],
    wheelchairAccessible: false,
    seniorFriendly: false,
    smokingAllowed: false,
    freeCancellation: false,
    payAtHotel: false,
    isAvailable: true,
  });

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch rooms whenever filters change
  useEffect(() => {
    fetchRooms();
  }, [filters]);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const res = await Get_Rooms_List(filters);
      setRooms(res.data?.data || []);
    } catch (err) {
      console.error("Failed to fetch rooms", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Handle filter change
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getFinalPrice = (room) => {
    if (!room.discountedPrice) return room.baseRate;
    return room.baseRate - room.discountedPrice;
  };

  const getDiscountPercent = (room) => {
    if (!room.discountedPrice) return 0;
    return Math.round((room.discountedPrice / room.baseRate) * 100);
  };

  return (
    <>
      <Header />

      <div className="rooms-page">
        {/* ================= SIDEBAR ================= */}
        <aside className="rooms-sidebar">
          <h2>Filter Rooms</h2>

          {/* Room Type */}
          <div className="filter-group">
            <label>Room Type</label>
            <select
              onChange={(e) => handleFilterChange("roomType", e.target.value)}
            >
              <option value="">All</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          {/* Room View */}
          <div className="filter-group">
            <label>Room View</label>
            <select
              onChange={(e) => handleFilterChange("roomView", e.target.value)}
            >
              <option value="">All</option>
              <option value="City">City</option>
              <option value="Sea">Sea</option>
              <option value="Garden">Garden</option>
            </select>
          </div>

          {/* Floor */}
          <div className="filter-group">
            <label>Floor Level</label>
            <select
              onChange={(e) => handleFilterChange("floorLevel", e.target.value)}
            >
              <option value="">All</option>
              <option value="Ground">Ground</option>
              <option value="Middle">Middle</option>
              <option value="Top">Top</option>
            </select>
          </div>

          {/* Price */}
          <div className="filter-group">
            <label>Max Price / Night</label>
            <input
              type="number"
              onChange={(e) => handleFilterChange("baseRate", e.target.value)}
            />
          </div>

          {/* Occupancy */}
          <div className="filter-group">
            <label>Adults</label>
            <input
              type="number"
              min="1"
              onChange={(e) => handleFilterChange("maxAdults", e.target.value)}
            />
          </div>

          {/* Bed Type */}
          <div className="filter-group">
            <label>Bed Type</label>
            <select
              onChange={(e) => handleFilterChange("bedType", e.target.value)}
            >
              <option value="">All</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Queen">Queen</option>
              <option value="King">King</option>
            </select>
          </div>

          {/* Amenities */}
          <div className="filter-group amenities">
            <label>Amenities</label>
            {["WiFi", "TV", "Mini Bar", "Balcony", "Jacuzzi"].map((a) => (
              <label key={a} className="checkbox">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFilterChange(
                      "amenities",
                      e.target.checked
                        ? [...filters.amenities, a]
                        : filters.amenities.filter((x) => x !== a)
                    )
                  }
                />
                {a}
              </label>
            ))}
          </div>

          {/* Availability */}
          <div className="filter-group amenities">
            <label className="checkbox">
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) =>
                  handleFilterChange("isAvailable", e.target.checked)
                }
              />
              Show Available Rooms
            </label>
          </div>
        </aside>

        {/* ================= ROOMS ================= */}
        <main className="rooms-list">
          {loading && <p>Loading rooms...</p>}

          {!loading && rooms.length === 0 && (
            <p>No rooms found for selected filters.</p>
          )}

          {rooms && rooms?.map((room) => (
            <div key={room._id} className="room-card">
              <img src={img1} alt={room.roomType} />

              <div className="room-content">
                <h3>{room?.roomType} Room</h3>
                <p className="room-desc">{room?.description}</p>

                <div className="room-meta">
                  <span>
                    <FaUsers /> {room?.maxAdults} Guests
                  </span>
                  <span>
                    <FaBed /> {room?.roomView} View
                  </span>
                </div>

                <div className="room-amenities">
                  {room?.amenities?.map((a) => (
                    <span key={a}>
                      {a == "WiFi" && <FaWifi />}
                      {a == "TV" && <FaTv />}
                      {a == "Jacuzzi" && <FaSwimmer />}
                      {a == "Mini Bar" && <FaGlassMartiniAlt />}
                      {a == "Balcony" && <FaBed />}
                      {a}
                    </span>
                  ))}
                </div>

                <div className="room-footer">
                  <div className="price">
                    {room?.discountedPrice > 0 ? (
                      <>
                        <span className="old-price">${room?.baseRate}</span>

                        <span className="new-price">
                          ${getFinalPrice(room)}
                        </span>

                        <span className="per-night">/night</span>
                        <span className="discount-badge">
                          {getDiscountPercent(room)}% OFF
                        </span>
                      </>
                    ) : (
                      <span className="new-price">${room?.baseRate}</span>
                    )}

                  </div>

                </div>
                
                  <button className="book-btn" onClick={() => navigate(`/room-details/${room?._id}`)}
                   style={{borderRadius:"10px",marginTop:"10px"}}>View Room</button>
              </div>
            </div>
          ))}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Rooms;
