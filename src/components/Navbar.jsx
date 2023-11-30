import React from "react";
import "../styles/Navbar.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <button className="navbutton">
          <span>REFERRALS</span>
        </button>
        <button className="navbutton">
          <span>OUR STORY</span>
        </button>
        <button className="navbutton">
          <span>AVIATION</span>
        </button>
      </div>
      <div>
        <Button className="center-section" component={Link} to="/">
          <span>
          <img src="logo.svg" alt="NordicAirGroup" />
          </span>
        </Button>
      </div>
      <div className="right-section">
        <button className="navbutton">
          <span>SERVICES</span>
        </button>
        <button className="navbutton">
          <span>INVENTORY</span>
        </button>
        <button className="navbutton">
          <span>CONTACT</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
