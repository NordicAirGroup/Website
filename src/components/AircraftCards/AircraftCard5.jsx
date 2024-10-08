import React from "react";
import "../../styles/AircraftCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import JetImage from "../../assets/G650ER.jpg";

const AircraftCard5 = () => {
  return (
    <div className="aircraft-card">
      <img src={JetImage} alt="G650ER" />
      <h3>TEST</h3>
      <div className="aircraft-card-border"></div>
      <div className="ac-p-container">
        <p>
          A versatile mid-size jet, harmonizing hours and cycles with dedicated
          maintenance programs, EASA compliant, presenting a compelling blend of
          value and capability.
        </p>
      </div>
      <div className="aircraft-card-tags-container">
        <p>Super-Midsize</p>
        <p>EASA</p>
        <p>Medium Range</p>
        <p>On Programs</p>
      </div>
      <div className="aircraft-card-button-container">
        <Button className="aircraft-card-button" component={Link} to="/contact">
          INQUIRE
        </Button>
      </div>
    </div>
  );
};

export default AircraftCard5;
