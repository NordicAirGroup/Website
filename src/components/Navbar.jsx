import React from "react";
import "../styles/Navbar.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import logo from "../logo.png";
>>>>>>> 8ed9fa64a1c7f3291e0a0e82773b905bf48aaf0d

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
<<<<<<< HEAD
          <span>NORDICAIRGROUP</span>
=======
          <img src={logo} alt="NordicAirGroup" />
>>>>>>> 8ed9fa64a1c7f3291e0a0e82773b905bf48aaf0d
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
