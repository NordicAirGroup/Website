import React from "react";
import "../styles/clients.css";
import AircraftCard from "../components/AircraftCards/AircraftCard";

function Clients() {
  return (
    <div className="clients-container">
      <div className="clients-content">
        <div className="client-title-container">
          <h1>CLIENTS</h1>
          <div className="clients-border"></div>
        </div>
        <div className="client-card-container">
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
        </div>
        <div className="color"></div>
      </div>
    </div>
  );
}

export default Clients;
