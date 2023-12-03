import React from "react";
import "../styles/joar.css";
import Socials from "./Socials";
import JoarImage from "../assets/Joar-photo.png";

const Joar = () => {
  return (
    <div className="joar-container">
      <div className="joar-wrapper">
        <img className="joar-img" src={JoarImage} alt="Joar" />
        <div className="joar-card">
          <h1>Joar Lennermark</h1>
          <p>Co-Founder & CEO</p>
          <p className="p1">
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
          <p className="p2">
            Contact:
            <br />
            Phone: (46) 72-531 26 56
            <br />
            Email: Joar@nordicairgroup.com
          </p>
          <Socials className="Joar-Socials" />
          <div className="ghost-element-for-socials"></div>
        </div>
      </div>
    </div>
  );
};

export default Joar;
