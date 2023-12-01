import React from "react";
import videoSource from "../assets/myvideo.mp4";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    // Select all video elements and set their attributes
    const videos = document.getElementsByTagName("video");
    for (let video of videos) {
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");
      video.play();
    }
  }, []);

  return (
    <div className="container">
      <header className="App-header">
        <div className="video-overlay"></div>
        <video
          className="background-video"
          width="100%"
          height="auto"
          autoPlay
          playsInline
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
