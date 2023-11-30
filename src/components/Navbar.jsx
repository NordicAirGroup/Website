import React from "react";
import "../styles/Navbar.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDropdownVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="left-section">
        <button className="navbutton">
          <span>CONTACT</span>
        </button>
        <button className="navbutton">
          <span>OUR STORY</span>
        </button>
        <button className="navbutton">
          <span>INVENTORY</span>
        </button>
      </div>
      <div>
        <Button className="center-section" component={Link} to="/">
          <img src={logo} alt="NordicAirGroup" />
        </Button>
      </div>
      <div className="right-section">
        <button className="navbutton">
          <span>SERVICES</span>
        </button>
        <button className="navbutton">
          <span>AVIATION </span>
        </button>
        <button className="navbutton">
          <span>REFERRALS</span>
        </button>

        <button
          className="menu-button"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          {/* Icon or text for menu button */}
        </button>

        <div className={`dropdown-menu ${dropdownVisible ? "show" : ""}`}>
          <Link to="/contact" onClick={() => setDropdownVisible(false)}>
            CONTACT
          </Link>
          <Link to="/our-story" onClick={() => setDropdownVisible(false)}>
            OUR STORY
          </Link>
          <Link to="/our-story" onClick={() => setDropdownVisible(false)}>
            INVENTORY
          </Link>
          <Link to="/our-story" onClick={() => setDropdownVisible(false)}>
            SERVICES
          </Link>
          <Link to="/our-story" onClick={() => setDropdownVisible(false)}>
            AVIATION
          </Link>
          <Link to="/our-story" onClick={() => setDropdownVisible(false)}>
            REFERRALS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
