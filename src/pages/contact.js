import React from "react";
import Navbar from "../components/Navbar";
import "../styles/contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-container-form">
        <ContactForm />
      </div>
      <div className="contact-container-info">
        <p>CONTACT INFO</p>
      </div>
    </div>
  );
}

export default Contact;
