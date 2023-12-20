import "../styles/contactInfo.css";
import JoarImage from "../assets/Joar-photo.png";

function ContactInfo() {
  return (
    <div className="contactInfo">
      <div className="jcontact-wrapper">
        <img className="jcontact-img" src={JoarImage} alt="Joar" />
        <div className="jcontact-card">
        <p className="p2contact">
            Contact:
            <br />
            Phone: (46) 72-531 26 56
            <br />
            Email: Joar@nordicairgroup.com
          </p>
          <h1>Joar Lennermark</h1>
          <p>Co-Founder & CEO</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;
