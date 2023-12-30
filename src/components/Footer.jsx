import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="row">
          {/* Company Information */}
          <div className="col">
            <h3>Nordic Air Group</h3>
            <p>P.O. Box: Essingestråket 25, Stockholm</p>
            <p>Phone: +46 72-531 26 56</p>
            <p>Email: Info@nordicairgroup.com</p>
          </div>

          {/* Quick Links */}
          <div className="col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
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
            <a href="https://www.youtube.com/channel/UCDqiDc1Zw7VaCPPcnjhhXcw">
              YouTube
            </a>
            <br />
            <a href="https://www.facebook.com/people/Nordic-Air-Group/61553922128129/">
              Facebook
            </a>
            <br />
            <a href="https://twitter.com/NordicAirGroup">Twitter</a>
            <br />
            <a href="https://www.instagram.com/nordicairgroup/">Instagram</a>
            <br />
            <a href="https://twitter.com/NordicAirGroup">Twitter</a>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>&copy; 2023 Nordic Air Group. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
