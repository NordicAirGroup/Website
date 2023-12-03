import React from "react";
import "../styles/ersu.css";
import Socials from "./Socials";
import ErsuImage from "../assets/Ersu-photo.png";

const Ersu = () => {
  return (
    <div className="ersu-container">
      <div className="ersu-wrapper">
        <img className="ersu-img" src={ErsuImage} alt="Ersu" />
        <div className="ersu-card">
          <h1>Ersu Dalbudak</h1>
          <p>Co-Founder & CEO</p>
          <p className="p1">
            Being the Co-Founder of Nordic Air Group, Ersu Lennermark has a
            passion for aviation, sales, and entrepreneurship. With very high
            ambitions of dedicating his life towards improving and evolving
            humanity, Nordic Air Group is the first leap of making this dream a
            reality. At only 17-years old, Ersu is in addition building a
            software company, whilst maintaining top grades in school and
            studying courses such as mathematics one year before his peers and
            programming at double speed. Ersu is always looking for a new
            challenge to conquer.
          </p>
          <p className="p2">
            Contact:
            <br />
            Phone: (46) 72-531 26 56
            <br />
            Email: Ersu@nordicairgroup.com
          </p>
          <Socials className="Ersu-Socials" />
        </div>
      </div>
    </div>
  );
};

export default Ersu;
