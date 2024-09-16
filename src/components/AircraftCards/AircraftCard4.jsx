import React from "react";
import "../../styles/AircraftCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import JetImage from "../../assets/G650ER.jpg";

const AircraftCard4 = () => {
  return (
    <div className="aircraft-card">
      <img src={JetImage} alt="G650ER" />
      <h3>MR. A</h3>
      <div className="aircraft-card-border"></div>
      <div className="ac-p-container">
        <p>
          An older mid-size jet, exquisitely maintained and on service programs,
          offering luxury and efficiency with a versatile registration.
        </p>
      </div>
      <div className="aircraft-card-tags-container">
        <p>Mid-Size</p>
        <p>N-Reg</p>
        <p>Long Range</p>
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

export default AircraftCard4;
