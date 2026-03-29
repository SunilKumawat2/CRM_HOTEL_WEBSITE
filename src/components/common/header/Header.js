import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import user_profile from "../../../assets/images/user_profile.jpg"
const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const dropdownRef = useRef();

  // Check for user token on mount
  useEffect(() => {
    const token = localStorage.getItem("user_token");
    setUserToken(token);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    setUserToken(null);
    navigate("/otp-send");
  };

  return (
    <header className="hotel-header">
      <div className="container">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="logo">
          <span>Grand</span>Hotel
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <Link to="/rooms" onClick={() => setMenuOpen(false)}>Rooms</Link>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="header-btn">
          {userToken ? (
            <div className="user-profile" ref={dropdownRef}>
              {/* Profile Image */}
              <img
                src={user_profile} // replace with user profile image from API if exists
                alt="User"
                className="profile-img"
                onClick={() => setProfileDropdown(!profileDropdown)}
              />

              {/* Dropdown Menu */}
              {profileDropdown && (
                <div className="profile-dropdown">
                  <div className="dropdown-item" onClick={() => navigate("/user-profile")}>
                    My Profile
                  </div>
                  <div className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => navigate("/otp-send")}>Sign In</button>
          )}
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