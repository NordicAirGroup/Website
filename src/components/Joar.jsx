import React from "react";
import "../styles/joar.css";
import Socials from "./Socials";
import JoarImage from "../assets/Joar-photo.png";

const Joar = () => {
  return (
    <div className="joar-container" id="about">
      <h1 className="h1abt">ABOUT US</h1>
      <div className="line1"></div>
      <div className="joar-wrapper">
        <img className="joar-img" src={JoarImage} alt="Joar" />
        <div className="joar-card">
          <h1>Joar Lennermark</h1>
          <p className="pj">Co-Founder & CEO</p>
          <p className="p1j">
            As the Co-Founder of Nordic Air Group, Joar Lennermark is deeply
            passioned about aviation, sales, and entrepreneurial ventures.
            Fueled by aspirations to specialize in aviation brokerage, Nordic
            Air Group represents an early, yet promising, beginning towards
            realizing this aspiration. Currently balancing his academic
            pursuits, Joar is simultaneously building a software company,
            consistently achieving exemplary academic results, and pursuing
            advanced studies in mathematics one year ahead of his class. Joar's
            relentless pursuit of new challenges underscores his dedication to
            making a meaningful impact in the aviation sector.
          </p>
          <p className="p2j-contact">
            Contact:
            <br />
            +46 72-531 26 56
            <br />
            Joar@nordicairgroup.com
          </p>
          <Socials className="Joar-Socials" />
        </div>
      </div>
    </div>
  );
};

export default Joar;
