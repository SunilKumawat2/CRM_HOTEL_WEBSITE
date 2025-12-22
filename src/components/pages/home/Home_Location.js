import React from "react";

const attractions = [
  { name: "City Center", distance: "2 km" },
  { name: "Airport", distance: "15 km" },
  { name: "Shopping Mall", distance: "1 km" },
  { name: "Beach", distance: "5 km" },
];

const Home_Location = () => {
  return (
    <section className="location-section">
      <div className="location-container">
        
        {/* Header */}
        <div className="location-header">
          <h5>Our Location</h5>
          <h2>Find Us & Nearby Attractions</h2>
        </div>

        {/* Content */}
        <div className="location-content">
          {/* Map */}
          <div className="map-wrapper">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086893217581!2d-122.41941518468142!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f16f3d0b%3A0x4a4e7f0aee92!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699826929420!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Nearby Attractions */}
          <div className="attractions">
            <h3>Nearby Attractions</h3>
            <ul>
              {attractions.map((item, index) => (
                <li key={index}>
                  <strong>{item.name}:</strong> {item.distance}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home_Location;
