import React from "react";

const reviews = [
  {
    name: "Emily Johnson",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Absolutely loved my stay! The rooms were spotless and the service was exceptional. Highly recommended!",
    platform: "Google",
  },
  {
    name: "Michael Smith",
    rating: 4,
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    review: "The spa and pool area were amazing. Delicious food and friendly staff. A memorable experience!",
    platform: "TripAdvisor",
  },
  {
    name: "Sophia Lee",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    review: "Luxury at its finest! Beautiful views and perfect location. Will definitely come back.",
    platform: "Google",
  },
];

const Home_Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* Header */}
        <div className="testimonials-header">
          <h5>Testimonials</h5>
          <h2>What Our Guests Say</h2>
        </div>

        {/* Reviews Grid */}
        <div className="testimonials-grid">
          {reviews.map((rev, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-photo">
                <img src={rev.photo} alt={rev.name} />
              </div>
              <div className="testimonial-content">
                <h3>{rev.name}</h3>
                <div className="testimonial-rating">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p>"{rev.review}"</p>
                <span className="testimonial-platform">{rev.platform}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home_Testimonials;
