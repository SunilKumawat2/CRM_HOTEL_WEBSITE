import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-column">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Booking Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe for latest offers and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Grand Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
