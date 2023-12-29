import React from "react";
import "../styles/ersu.css";
import Socials from "./Socials-Ersu";
import ErsuImage from "../assets/Ersu-photo.png";

const Ersu = () => {
  return (
    <div className="ersu-container">
      <div className="ersu-wrapper">
        <img className="ersu-img" src={ErsuImage} alt="Ersu" />
        <div className="ersu-card">
          <h1>Ersu Dalbudak</h1>
          <p className="pe">Co-Founder & SDR</p>
          <p className="p1e">
            Ersu Dalbudak's entrepreneurial spirit was ignited at the age of 12
            when he made his first sale, marking the beginning of a journey
            fueled by dedication and passion. At Nordic Air Group, Ersu blends
            his enthusiasm for entrepreneurship with his love for aircraft, a
            combination that has propelled him forward. His skills were further
            honed through a pitching competition victory, equipping him with
            valuable insights. These skills and experiences are now an asset to
            his role at NAG, where he is determined to make a significant
            impact.
          </p>
          <p className="p2e-contact">
            Contact:
            <br />
            +46 70-723 84 95
            <br />
            Ersu@nordicairgroup.com
          </p>
          <Socials className="Ersu-Socials" />
        </div>
      </div>
    </div>
  );
};

export default Ersu;
