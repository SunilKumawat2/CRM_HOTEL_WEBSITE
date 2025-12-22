import React from "react";

const amenities = [
  { icon: "🛏️", title: "Free Wi-Fi", description: "Stay connected with our high-speed internet" },
  { icon: "💆‍♀️", title: "Spa", description: "Relax and rejuvenate with our premium spa services" },
  { icon: "🏊‍♂️", title: "Swimming Pool", description: "Enjoy a luxurious pool experience" },
  { icon: "🍽️", title: "Restaurant", description: "Savor gourmet meals from world-class chefs" },
  { icon: "🏋️‍♂️", title: "Gym", description: "Fully equipped modern fitness center" },
  { icon: "🚗", title: "Airport Pickup", description: "Convenient transfers to and from the airport" },
];

const Home_Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* Section Header */}
        <div className="services-header">
          <h5>Our Amenities</h5>
          <h2>Premium Services for Our Guests</h2>
          <p>We provide exclusive facilities and services to make your stay truly exceptional.</p>
        </div>

        {/* Amenities Grid */}
        <div className="services-grid">
          {amenities.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home_Services;
