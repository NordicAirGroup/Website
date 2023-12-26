import React from "react";
import "../styles/joar.css";
import Socials from "./Socials";
import JoarImage from "../assets/Joar-photo.png";

const Joar = () => {
  return (
    <div className="joar-container">
      <h1 className="h1abt">ABOUT US</h1>
      <div className="line1"></div>
      <div className="joar-wrapper">
        <img className="joar-img" src={JoarImage} alt="Joar" />
        <div className="joar-card">
          <h1>Joar Lennermark</h1>
          <p className="pj">Co-Founder & CEO</p>
          <p className="p1j">
            Being the Co-Founder of Nordic Air Group, Joar Lennermark has a
            passion for aviation, sales and entrepreneurship. With very high
            ambitions of dedicating his life towards improving and evolving
            humanity, Nordic Air Group is the first leap of making this dream a
            reality. At only 17-years old, Joar is in addition building a
            software company, whilst maintaning top grades in school and
            studying courses such as mathematics one year before his peers and
            programming at double speed. Joar is always looking for a new
            challenge to conquer.
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
