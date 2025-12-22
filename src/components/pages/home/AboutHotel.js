import React from "react";

const AboutHotel = () => {
  return (
    <section className="about-hotel">
      <div className="about-container">
        
        {/* Left Content */}
        <div className="about-content">
          <h5>About Our Hotel</h5>
          <h2>
            A Luxury Stay Experience <br /> In The Heart Of The City
          </h2>

          <p>
            Welcome to <strong>Grand Hotel</strong>, where timeless elegance
            meets modern comfort. With decades of hospitality excellence,
            we offer luxurious rooms, world-class services, and unforgettable
            experiences for our guests.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat">
              <h3>25+</h3>
              <span>Years of Excellence</span>
            </div>

            <div className="stat">
              <h3>120+</h3>
              <span>Luxury Rooms</span>
            </div>

            <div className="stat">
              <h3>15+</h3>
              <span>Awards Won</span>
            </div>
          </div>

          <button className="about-btn">Read More</button>
        </div>

        {/* Right Images */}
        <div className="about-images">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Hotel"
            className="img-main"
          />
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
            alt="Hotel Interior"
            className="img-overlay"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHotel;
