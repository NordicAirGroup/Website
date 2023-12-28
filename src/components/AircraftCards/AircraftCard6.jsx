import React from "react";
import "../../styles/AircraftCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const AircraftCard6 = () => {
  return (
    <div className="aircraft-card">
      <h3>MR. AG</h3>
      <div className="aircraft-card-border"></div>
      <div className="ac-p-container">
        <p>
          A new ultra-long-range jet, an urgent opportunity, featuring minimal
          usage, ready for rapid acquisition at a notable value.
        </p>
      </div>
      <div className="aircraft-card-tags-container">
        <p>Ultra-Long Range</p>
        <p>Low TTAF</p>
        <p>Rapid Sale Requirement</p>
      </div>
      <div className="aircraft-card-button-container">
        <Button className="aircraft-card-button" component={Link} to="/contact">
          INQUIRE
        </Button>
      </div>
    </div>
  );
};

export default AircraftCard6;
