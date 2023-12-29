import React from "react";
import Navbar from "../components/Navbar";
import "../styles/contact.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ContactInfoErsu from "../components/ContactInfoErsu";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-container-form">
        <ContactForm />
      </div>
      <div className="contact-container-info">
        <h1>CONTACT US</h1>
        <ContactInfo />
        <ContactInfoErsu />
      </div>
      <div className="contact-color2"></div>
    </div>
  );
}

export default Contact;
