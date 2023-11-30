import React from "react";
import "../styles/Navbar.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
