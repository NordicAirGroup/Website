import React from "react";
import Joar from "./Joar";
import Ersu from "./Ersu";
import "../styles/about.css";
import "../styles/ourstory.css";
import JetImage from "../assets/JetImage.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about") {
      document.getElementById("about")?.scrollIntoView();
    }
  }, [location]);

  const location2 = useLocation();

  useEffect(() => {
    if (location2.hash === "#ourstory") {
      document.getElementById("ourstory")?.scrollIntoView();
    }
  }, [location2]);

  return (
    <div>
      <div id="about" className="about-container">
        <Joar />
        <Ersu />
      </div>
      <div id="ourstory" className="ourstory-container">
        <div className="ourstory-content">
          <div className="jetimage-container">
            <img src={JetImage} alt="JetImage" />
          </div>
          <div className="ourstory-card-container">
            <div className="ourstory-card">
              <h1>Our Story</h1>
              <p>
                Joar and Ersu had just finished their first lecture, during
                which Ersu shared his plan for his aspirations to become a pilot
                or aviation broker. Joar, recently landing a role in appointment
                setting, saw an opportunity. He suggested Ersu could gain
                valuable experience and connections through similar work.
                Initially neutral, Ersu warmed up to the idea as they explored
                it further, realizing they could add genuine value to the field.
                They decided to team up and thus, a dream took flight: entering
                the private aviation industry with a straightforward service
                connecting buyer's and seller's brokers. Our role is simple yet
                impactful – facilitating connections when a strong fit is
                identified, saving time and simplifying the process for both
                parties.
                <br />
                <br />
                What drives us? Our shared passions – aviation, sales, and
                entrepreneurship – make this venture irresistible. But more
                importantly, we're here to contribute meaningfully, solving
                problems and putting in the hard work. We stand as the future of
                the world, determined to set ourselves apart. While many in our
                generation might hesitate to go the extra mile, we are committed
                to conquer the challenges that lie ahead – and, on a lighter
                note, we're also looking to fund our pilot licenses!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
