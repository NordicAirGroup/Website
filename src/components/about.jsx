import React from "react";
import Joar from "./Joar";
import Ersu from "./Ersu";
import "../styles/about.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about") {
      document.getElementById("about")?.scrollIntoView();
    }
  }, [location]);

  return (
    <div id="about" className="about-container">
      <Joar />
      <Ersu />
    </div>
  );
};

export default About;
