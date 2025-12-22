import React from "react";

const offers = [
  {
    title: "Summer Escape",
    description: "Up to 25% off for stays between June and August",
    code: "SUMMER25",
    image: "https://images.unsplash.com/photo-1501117716987-c8e6e0f17790",
  },
  {
    title: "Weekend Getaway",
    description: "Book 2 nights and get 1 free weekend stay",
    code: "WEEKENDFREE",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    title: "Spa Package",
    description: "Enjoy 15% off on spa packages when booking a suite",
    code: "SPA15",
    image: "https://images.unsplash.com/photo-1542317854-4157ff6b70fa",
  },
];

const Home_SpecialOffers = () => {
  return (
    <section className="offers-section">
      <div className="offers-container">
        
        {/* Header */}
        <div className="offers-header">
          <h5>Special Offers</h5>
          <h2>Exclusive Deals for Our Guests</h2>
          <p>Book now to enjoy our limited-time offers and make your stay unforgettable.</p>
        </div>

        {/* Offers Grid */}
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <div className="offer-image">
                <img src={offer.image} alt={offer.title} />
              </div>
              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <span className="promo-code">Use Code: {offer.code}</span>
                <button className="offer-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home_SpecialOffers;
