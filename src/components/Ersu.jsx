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
            Ersu Dalbudak began his entrepreneurial journey remarkably early,
            successfully selling his first self-made product at just 12 years
            old. Since then Ersu has continued his passion for entrepreneurship
            combined with aviation at Nordic Air Group. Ersu has been fueled by
            a lifelong passion for aircraft and aviation. His journey also
            includes triumph in a pitching competition, where he acquired
            invaluable skills. These skills and experiences are now an asset to
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
