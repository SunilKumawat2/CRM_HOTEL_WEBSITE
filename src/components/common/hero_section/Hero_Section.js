import React, { useEffect, useState } from "react";


const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Luxury Redefined",
    subtitle: "Experience Comfort Like Never Before",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    title: "Elegant Rooms",
    subtitle: "Designed For Absolute Relaxation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    title: "World Class Hospitality",
    subtitle: "Where Every Stay Is Special",
  },
];

const Hero_Section = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides && slides?.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === current ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h4>Welcome to Grand Hotel</h4>
        <h1>{slides[current].title}</h1>
        <p>{slides[current].subtitle}</p>

        <div className="hero-buttons">
          <button className="btn-primary">Book Your Stay</button>
          <button className="btn-outline">Explore Rooms</button>
        </div>
      </div>
    </section>
  );
};

export default Hero_Section;
