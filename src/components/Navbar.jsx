import React from "react";
import "../styles/Navbar.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import Home from "../pages/home";
import Testimonials from "../pages/Testimonials";

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

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <button className="navbutton">
          <Link to="/testimonials" className="navlink">
            <span>TESTIMONIALS</span>
          </Link>
        </button>
        <button className="navbutton">
          <Link to="/aviation" className="navlink">
            <span>AVIATION</span>
          </Link>
        </button>
        <button className="navbutton">
          <Link to="/contact" className="navlink" component={Link}>
            <span>CONTACT</span>
          </Link>
        </button>
      </div>

      <div className="logo-container">
        <Button
          disableRipple
          className="logo-button"
          component={Link}
          to="/#home"
        >
          <img src={logo} alt="NordicAirGroup" />
        </Button>
      </div>

      <div className="right-section">
        <button className="navbutton">
          <Link to="/#clients" className="navlink" component={Link}>
            <span>CLIENTS</span>
          </Link>
        </button>
        <button className="navbutton">
          <Link to="/#services" className="navlink">
            <span>SERVICES</span>
          </Link>
        </button>
        <button className="navbutton">
          <Link to="/#ourstory" className="navlink">
            <span>OUR STORY</span>
          </Link>
        </button>

        <button
          className="menu-button"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <div
            className={isActive ? "menu-container change" : "menu-container"}
            onClick={toggleClass}
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </button>

        <div className={`dropdown-menu ${dropdownVisible ? "show" : ""}`}>
          <Link to="/contact" onClick={() => setDropdownVisible(false)}>
            CONTACT
          </Link>
          <Link to="/#ourstory" onClick={() => setDropdownVisible(false)}>
            OUR STORY
          </Link>
          <Link to="/#clients" onClick={() => setDropdownVisible(false)}>
            CLIENTS
          </Link>
          <Link to="/#services" onClick={() => setDropdownVisible(false)}>
            SERVICES
          </Link>
          <Link to="/aviation" onClick={() => setDropdownVisible(false)}>
            AVIATION
          </Link>
          <Link to="/testimonials" onClick={() => setDropdownVisible(false)}>
            TESTIMONIALS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
