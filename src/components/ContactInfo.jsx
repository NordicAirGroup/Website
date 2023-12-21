import React, { useCallback } from "react";
import "../styles/contactInfo.css";
import JoarImage from "../assets/Joar-photo.png";
import { useState } from "react";
import TransitionAlerts from "./Alert";

function ContactInfo() {
  const [notifications, setNotifications] = useState([]);

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      const newNotification = {
        id: Math.random(),
        message: message,
        open: true,
      };

      setNotifications((prev) => [...prev.slice(-2), newNotification]);

      setTimeout(() => {
        setNotifications((prev) =>
          prev.map((notif) =>
            notif.id === newNotification.id ? { ...notif, open: false } : notif
          )
        );
      }, 3000);
    });
  };

  return (
    <div className="contactInfo">
      <div className="jcontact-wrapper">
        <img className="jcontact-img" src={JoarImage} alt="Joar" />
        <div className="jcontact-card">
          <div className="heading-and-subhead">
            <p className="p0">Co-Founder & CEO</p>
            <h1>Joar Lennermark</h1>
          </div>
          <div>
            <p
              className="p1"
              onClick={() => copyToClipboard("+46 72-531 26 56")}
            >
              Phone: +46 72-531 26 56
            </p>
            <br />
            <p
              className="p2"
              onClick={() => copyToClipboard("Joar@nordicairgroup.com")}
            >
              Email: Joar@nordicairgroup.com
            </p>
          </div>
        </div>
      </div>
      <div className="notifications-container">
        {notifications.map((notif) => (
          <TransitionAlerts
            key={notif.id}
            message={notif.message}
            open={notif.open}
            setOpen={() => {
              setNotifications((prev) =>
                prev.filter((notification) => notification.id !== notif.id)
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
