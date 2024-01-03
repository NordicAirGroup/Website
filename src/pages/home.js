import React from "react";
import videoSource from "../assets/myvideo.mp4";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Services from "../components/services";
import Clients from "../components/clients";
import About from "../components/about";
import "../styles/ourstory.css";

function Home() {
  useEffect(() => {
    const videos = document.getElementsByTagName("video");
    for (let video of videos) {
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");
      video.play();
    }
  }, []);

  return (
    <div>
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
            CONNECTING AMBITONS, ONE AIRCRAFT AT A TIME.
          </h1>
          <Button className="about-button" component={Link} to="/#about">
            <span className="box">A B O U T</span>
          </Button>
        </header>
      </div>
      <Services />
      <Clients />
      <About />
      <div className="ourstory-color"></div>
        <div className="ourstory-color2"></div>
        <div className="ourstory-color3"></div>
        <div className="ourstory-color4"></div>
    </div>
  );
}

export default Home;
