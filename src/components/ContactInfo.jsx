import "../styles/contactInfo.css";
import JoarImage from "../assets/Joar-photo.png";

function ContactInfo() {
  return (
    <div className="contactInfo">
      <div className="jcontact-wrapper">
        <img className="jcontact-img" src={JoarImage} alt="Joar" />
        <div className="jcontact-card">
          <div className="heading-and-subhead">
            <p>Co-Founder & CEO</p>
            <h1>Joar Lennermark</h1>
          </div>
          <div>
            <p className="p1">Phone: (46) 72-531 26 56</p>
            <br />
            <p className="p">Email: Joar@nordicairgroup.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
