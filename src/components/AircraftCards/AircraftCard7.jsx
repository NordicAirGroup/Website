import React from "react";
import "../../styles/AircraftCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const AircraftCard7 = () => {
  return (
    <div className="aircraft-card">
      <h3>MR. AG</h3>
      <div className="aircraft-card-border"></div>
      <div className="ac-p-container">
        <p>
          A new jet of exceptional elegance, featuring the luxurious Nuage
          Chaise, presented as a premium aviation masterpiece.
        </p>
      </div>
      <div className="aircraft-card-tags-container">
        <p>Luxary</p>
        <p>Mid-sized</p>
        <p>New YOM</p>
        <p>Long Range</p>
        <p>Fast</p>
      </div>
      <div className="aircraft-card-button-container">
        <Button className="aircraft-card-button" component={Link} to="/contact">
          INQUIRE
        </Button>
      </div>
    </div>
  );
};

export default AircraftCard7;
