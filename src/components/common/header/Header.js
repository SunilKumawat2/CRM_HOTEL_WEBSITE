import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hotel-header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <span>Grand</span>Hotel
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#rooms" onClick={() => setMenuOpen(false)}>Rooms</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          {/* Mobile CTA
          <button className="mobile-btn">Book Now</button> */}
        </nav>

        {/* Desktop CTA */}
        <div className="header-btn">
          <button>Book Now</button>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
