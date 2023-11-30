import React from "react";
import videoSource from "../assets/myvideo.mp4";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";

function Hero() {
  return (
    <div className="container">
      <header className="App-header">
        <Navbar />
        <div className="video-overlay"></div>
        <video
          className="background-video"
          width="100%"
          height="auto"
          autoPlay
          muted
          loop
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
<<<<<<< HEAD
        <h1 className="hero-title">Stop being broke, fly a jet!</h1>
=======
        <h1 className="hero-title">Connecting ambitions, one aircraft at a time.</h1>
>>>>>>> 8ed9fa64a1c7f3291e0a0e82773b905bf48aaf0d
        <Button className="about-button" component={Link} to="/about">
          <span className="box">A B O U T</span>
        </Button>
      </header>
    </div>
  );
}

export default Hero;
