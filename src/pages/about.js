import React from "react";
import Navbar from "../components/Navbar";
import Joar from "../components/Joar";
import Ersu from "../components/Ersu";
import "../styles/about.css";

function About() {
  return (
    <div className="about-container">
      <Navbar />
      <Joar />
      <Ersu />
    </div>
  );
}

export default About;
