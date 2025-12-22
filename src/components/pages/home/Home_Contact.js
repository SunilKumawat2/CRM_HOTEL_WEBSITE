import React from "react";

const Home_Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <h5>Contact Us</h5>
          <h2>Get In Touch With Grand Hotel</h2>
          <p>We’d love to hear from you. Reach out with any questions or booking inquiries.</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Details</h3>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> info@grandhotel.com</p>
            <p><strong>Address:</strong> 123 Luxury St, City, Country</p>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home_Contact;
