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
        <h1 className="hero-title">
          Connecting ambitions, one aircraft at a time.
        </h1>
        <Button className="about-button" component={Link} to="/about">
          <span className="box">A B O U T</span>
        </Button>
      </header>
    </div>
  );
}

export default Hero;
