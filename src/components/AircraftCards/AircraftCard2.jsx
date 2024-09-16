import React from "react";
import "../../styles/AircraftCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import JetImage from "../../assets/G650ER.jpg";

const AircraftCard2 = () => {
  return (
    <div className="aircraft-card">
      <img src={JetImage} alt="G650ER" />
      <h3>MR. S</h3>
      <div className="aircraft-card-border"></div>
      <div className="ac-p-container">
        <p>
          A modern light jet with cutting-edge features, on programs and
          currently enhanced for broader compliance, offering luxury and
          advanced connectivity.
        </p>
      </div>
      <div className="aircraft-card-tags-container">
        <p>Light</p>
        <p>N-Reg</p>
        <p>Long Range</p>
        <p>Advanced Avionics</p>
        <p>Wi-Fi</p>
      </div>
      <div className="aircraft-card-button-container">
        <Button className="aircraft-card-button" component={Link} to="/contact">
          INQUIRE
        </Button>
      </div>
    </div>
  );
};

export default AircraftCard2;
