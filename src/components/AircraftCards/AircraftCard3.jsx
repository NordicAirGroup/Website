import React from "react";
import "../../styles/AircraftCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import JetImage from "../../assets/G650ER.jpg";

const AircraftCard3 = () => {
  return (
    <div className="aircraft-card">
      <img src={JetImage} alt="G650ER" />
      <h3>MR. A</h3>
      <div className="aircraft-card-border"></div>
      <div className="ac-p-container">
        <p>
          An older mid-size jet, well-maintained with a balance of hours and
          cycles, offers consistent performance and compliance, positioned at a
          competitive value.
        </p>
      </div>
      <div className="aircraft-card-tags-container">
        <p>Mid-Size</p>
        <p>EASA</p>
        <p>Medium Range</p>
        <p>On Programs</p>
        <p>Moderate TT</p>
      </div>
      <div className="aircraft-card-button-container">
        <Button className="aircraft-card-button" component={Link} to="/contact">
          INQUIRE
        </Button>
      </div>
    </div>
  );
};

export default AircraftCard3;
