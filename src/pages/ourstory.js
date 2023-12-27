import React from "react";
import Navbar from "../components/Navbar";
import "../styles/ourstory.css";
import Joar from "../components/Joar";
import Ersu from "../components/Ersu";
import "../styles/about.css";
import JetImage from "../assets/JetImage.jpg";

function OurStory() {
  return (
    <div className="ourstory-container">
      <div className="ourstory-content">
        <div className="ourstory-image-container">
          <img className="ourstory-image" src={JetImage} alt="Image" />
        </div>
        <div className="ourstory-card-container">
          <div className="ourstory-card">
            <h1>Our Story</h1>
            <p>
              On a brisk autumn day Joar and Ersu had just
              finished their first lecture, during which Ersu shared his deep
              passion for aviation and his aspirations to become a pilot or
              aviation broker. Joar, recently landing a role in appointment
              setting, saw an opportunity. He suggested Ersu could gain valuable
              experience and connections through similar work. Initially
              neutral, Ersu warmed up to the idea as they explored it further,
              realizing they could add genuine value to the field. Thus, a dream
              took flight: entering the private aviation industry with a
              straightforward service connecting buyer's and seller's brokers.
              Our role is simple yet impactful – facilitating connections when a
              strong fit is identified, saving time and simplifying the process
              for both parties. Aiming to give substantially more value, than
              they take.
              <br />
              <br />
              What drives us? Firstly, the thrill of making our mark in the
              prestigious world of private aviation. Our shared passions –
              aviation, sales, and entrepreneurship – make this venture
              irresistible. But more importantly, we're here to contribute
              meaningfully, solving problems and putting in the hard work. We
              stand as the future of the world, determined to set ourselves
              apart. While many in our generation might hesitate to go the extra
              mile, we are committed to conquer the challenges that lie ahead –
              and, on a lighter note, we're also looking to fund our pilot
              licenses!
            </p>
          </div>
        </div>
      </div>
      <div className="about-container" id="about">
        <Joar />
        <Ersu />
      </div>
    </div>
  );
}

export default OurStory;
