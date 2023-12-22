import React, { useCallback } from "react";
import "../styles/contactInfo.css";
import JoarImage from "../assets/Ersu-photo.png";
import { useState } from "react";
import TransitionAlerts from "./Alert";

function ContactInfoErsu() {
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
        <img className="jcontact-img" src={JoarImage} alt="Ersu" />
        <div className="jcontact-card">
          <div className="heading-and-subhead">
            <p className="p0">Co-Founder & SDR</p>
            <h1 className="h1e">Ersu Dalbudak</h1>
          </div>
          <div>
            <p
              className="p1"
              onClick={() => copyToClipboard("+46 70-723 84 95")}
            >
              Phone: +46 70-723 84 95
            </p>
            <br />
            <p
              className="p2"
              onClick={() => copyToClipboard("Ersu@nordicairgroup.com")}
            >
              Email: Ersu@nordicairgroup.com
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

export default ContactInfoErsu;
