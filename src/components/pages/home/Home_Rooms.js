import React from "react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "$180 / Night",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    features: ["King Bed", "Free Wi-Fi", "City View"],
  },
  {
    id: 2,
    name: "Luxury Suite",
    price: "$320 / Night",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    features: ["Private Balcony", "Jacuzzi", "Sea View"],
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: "$550 / Night",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    features: ["Living Area", "Private Pool", "VIP Service"],
  },
];

const Home_Rooms = () => {
  return (
    <section className="rooms-section">
      <div className="rooms-container">
        
        {/* Section Header */}
        <div className="rooms-header">
          <h5>Our Rooms</h5>
          <h2>Rooms & Luxury Suites</h2>
          <p>
            Discover our thoughtfully designed rooms and suites, crafted
            to provide maximum comfort and elegance.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div className="room-card" key={room.id}>
              
              {/* Image */}
              <div className="room-image">
                <img src={room.image} alt={room.name} />
                <span className="room-price">{room.price}</span>
              </div>

              {/* Content */}
              <div className="room-content">
                <h3>{room.name}</h3>

                <ul>
                  {room.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="room-actions">
                  <button className="btn-outline">View Details</button>
                  <button className="btn-primary">Book Now</button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home_Rooms;
