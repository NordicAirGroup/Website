import React from "react";
import "../styles/joar.css";
import Socials from "./Socials";

const Joar = () => {
  return (
    <div className="joar-container">
      <div className="joar-wrapper">
        <div className="about-card1">
          <h1>Joar Lennermark</h1>
          <p>Co-Founder</p>
          <p className="p1">Info about me</p>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Joar;
