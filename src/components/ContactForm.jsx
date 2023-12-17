// ContactForm.js

import React, { useState } from "react";
import "../styles/contact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json(); // Assuming the server sends back JSON
        console.log(result);
        alert("Message sent!");
      } else {
        const result = await response.json(); // Here you get the JSON response when it's not OK
        console.error("Failed to send message:", result);
        alert("Failed to send message: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message");
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
