import React from "react";
import "../styles/services.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SheildIcon from "../assets/sheild-icon.png";
import LeadsIcon from "../assets/leads-icon.png";
import PolicyIcon from "../assets/policy-icon.png";
import StarIcon from "../assets/star-icon.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#services") {
      document.getElementById("services")?.scrollIntoView();
    }
  }, [location]);

  return (
    <div id="services" className="services-container">
      <div className="services-card-container">
        <div className="services-left-container">
          <h3>SERVICE</h3>
          <h1>What can we do for you?</h1>
          <p>
            We specialize in helping you find the ideal aircraft. Our process
            begins with a thorough discussion of your needs, preferences, and
            requirements. Based on this information, we recommend suitable
            aircraft options until we identify the perfect match for you. Once
            we find the right aircraft, we guide you through a streamlined,
            tailored process to ensure a smooth and successful transaction.
          </p>
          <Button
            className="services-button"
            disableRipple
            component={Link}
            to="/contact"
          >
            Get started
          </Button>
        </div>
        <div className="services-right-container">
          <div className="service-card">
            <div className="service-img-container">
              <img
                className="service-card-icon-container"
                src={LeadsIcon}
                alt="Icon"
              />
            </div>
            <div className="service-card-text-container">
              <h3>Hot Leads</h3>
              <p>
                We deliver high-quality leads directly to you. If the brokers
                are the closers, we act as the appointmentsetters by providing
                numerous interested leads, enhancing your leverage.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img-container">
              <img
                className="service-card-icon-container"
                src={StarIcon}
                alt="Icon"
              />
            </div>
            <div className="service-card-text-container">
              <h3>Off-market Exclusivity</h3>
              <p>
                Our service is exclusively with off-market aircraft, ensuring
                confidentiality and providing fresh, unseen options to buyers
                without the risk of on-market exposure.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img-container">
              <img
                className="service-card-icon-container"
                src={SheildIcon}
                alt="Icon"
              />
            </div>
            <div className="service-card-text-container">
              <h3>100% Secured</h3>
              <p>
                Working with us carries no risk since we earn only when you do.
                We also prioritize your most valuable asset—time—and our service
                exists to save it for you.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img-container">
              <img
                className="service-card-icon-container"
                src={PolicyIcon}
                alt="Icon"
              />
            </div>
            <div className="service-card-text-container">
              <h3>No Deal Involvment Policy</h3>
              <p>
                We focus solely on connecting you with strong fits, ensuring no
                involvement in deal negotiations or closing processes, just
                facilitating a seamless introduction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
