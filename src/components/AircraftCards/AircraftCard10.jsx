import React from "react";
import "../../styles/AircraftCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const AircraftCard10 = () => {
  return (
    <div className="aircraft-card">
      <h3>MR. </h3>
      <div className="aircraft-card-border"></div>
      <div className="ac-p-container">
        <p></p>
      </div>
      <div className="aircraft-card-tags-container">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="aircraft-card-button-container">
        <Button className="aircraft-card-button" component={Link} to="/contact">
          INQUIRE
        </Button>
      </div>
    </div>
  );
};

export default AircraftCard10;
