import React from "react";
import Navbar from "../components/Navbar";
import "../styles/contact.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-container-form">
        <ContactForm />
      </div>
      <div className="contact-container-info">
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;
