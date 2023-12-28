import React from "react";
import "../../styles/AircraftCard.css";

const AircraftCard = () => {
  return (
    <div className="aircraft-card">
      <h3>MR. P</h3>
      <div className="aircraft-card-border"></div>
      <div className="ac-p-container">
        <p>
          This is a test, because this aircraft is an absoloute beauty it has
          four interior seats. beauty it has four interior seats.beauty it has
          four interior seats.
        </p>
      </div>
      <div className="aircraft-card-tags-container">
        <p>Luxary</p>
        <p>Mid-sized</p>
        <p>New YOM</p>
        <p>Long Range</p>
        <p>Fast</p>
      </div>
    </div>
  );
};

export default AircraftCard;
