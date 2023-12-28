import React from "react";
import "../styles/clients.css";
import AircraftCard1 from "../components/AircraftCards/AircraftCard1";
import AircraftCard2 from "../components/AircraftCards/AircraftCard2";
import AircraftCard3 from "../components/AircraftCards/AircraftCard3";
import AircraftCard4 from "../components/AircraftCards/AircraftCard4";
import AircraftCard5 from "../components/AircraftCards/AircraftCard5";
import AircraftCard6 from "../components/AircraftCards/AircraftCard6";
import AircraftCard7 from "../components/AircraftCards/AircraftCard7";
import AircraftCard8 from "../components/AircraftCards/AircraftCard8";
import AircraftCard9 from "../components/AircraftCards/AircraftCard9";
import AircraftCard10 from "../components/AircraftCards/AircraftCard10";

function Clients() {
  return (
    <div className="clients-container">
      <div className="clients-content">
        <div className="client-title-container">
          <h1>CLIENTS</h1>
          <div className="clients-border"></div>
        </div>
        <div className="client-card-container">
          <AircraftCard1 />
          <AircraftCard2 />
          <AircraftCard3 />
          <AircraftCard4 />
          <AircraftCard5 />
          <AircraftCard6 />
          <AircraftCard7 />
        </div>
        <div className="color"></div>
      </div>
    </div>
  );
}

export default Clients;
