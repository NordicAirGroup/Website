import React from "react";
//import "../styles/footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* Company Information */}
          <div className="col">
            <h3>Company Name</h3>
            <p>Address: 123 Street, City</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@example.com</p>
          </div>

          {/* Quick Links */}
          <div className="col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col">
            <h3>Follow Us</h3>
            <a href="http://facebook.com">Facebook</a>
            <br />
            <a href="http://twitter.com">Twitter</a>
            <br />
            <a href="http://instagram.com">Instagram</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col">
            <p>&copy; 2023 Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
