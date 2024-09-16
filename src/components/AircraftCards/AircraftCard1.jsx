import React from "react";
import "../../styles/AircraftCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import JetImage from "../../assets/G650ER.jpg";

const AircraftCard1 = () => {
  return (
    <div className="aircraft-card">
      <img src={JetImage} alt="G650ER" />
      <h3>2017 G650ER</h3>
      <div className="aircraft-card-border"></div>
      <div className="ac-p-container">
        <p>
          A distinguished mid-size jet, elegantly preserved with moderate usage,
          featuring comprehensive care programs and a broad operational range. 
          Inquire for specs, photos and additional information.
        </p>
      </div>
      <div className="aircraft-card-tags-container">
        <p>Mid-Size</p>
        <p>EASA</p>
        <p>Long Range</p>
        <p>Spacious Cabin</p>
        <p>Low TT</p>
      </div>
      <div className="aircraft-card-button-container">
        <Button className="aircraft-card-button" component={Link} to="/contact">
          INQUIRE
        </Button>
      </div>
    </div>
  );
};

export default AircraftCard1;
