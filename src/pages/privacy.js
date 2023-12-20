import React from "react";
import Navbar from "../components/Navbar";
import style from "../styles/Privacy.css";

function About() {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <h2>Effective Date: November 24 2023</h2>

        <h3>1. Introduction</h3>
        <p>
          Nordic Air Group provides a matchmaking service for aircraft brokers,
          connecting buyers and sellers to facilitate smooth transactions. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website and use our services.
        </p>

        <h3>2. Information We Collect</h3>
        <p>
          We may collect personal information about you in various ways, such as
          when you register on our website, use our services, or participate in
          our research activities. This may include contact details like your
          name, email address, and phone number, professional information, and
          any other information you choose to provide.
        </p>

        <h3>3. How We Use Your Information</h3>
        <p>
          We use your information to provide and improve our services,
          communicate with you, send promotional materials, conduct research and
          analysis, and comply with legal obligations.
        </p>

        <h3>4. Sharing of Information</h3>
        <p>
          We may share your information with service providers, other users of
          our service, and legal authorities when required by law or to protect
          our rights.
        </p>

        <h3>5. Data Security</h3>
        <p>
          We implement reasonable security measures to protect your information
          from unauthorized access or misuse.
        </p>

        <h3>6. Your Rights and Choices</h3>
        <p>
          You have certain rights regarding your personal information, including
          the right to access, correct, or delete it. You can also opt out of
          receiving promotional communications from us.
        </p>

        <h3>7. Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time and will notify
          you of any changes by posting the new policy on this page.
        </p>

        <h3>8. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at Info@nordicairgroup.com.
        </p>
      </div>
    </div>
  );
}

export default About;
