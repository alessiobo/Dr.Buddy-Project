import React from "react";
import drbuddy from "../PartClient/img/logo_white.png";
import "./partclient.css";
import Tabella from "./Table/Tabella";

export default function Drbuddy() {
  return (
    <div className="upper-client">
      <div className="poligonoBlu"></div>
      <nav>
        <div className="link-container">
          <img src={drbuddy} alt="drbuddy" />
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">Option</a>
          <a href="">Home</a>
        </div>
      </nav>
      <div className="utente">
        <h3>Utente Connesso</h3>
        <div className="green-dot"></div>
      </div>
      <div className="client-container">
        <div className="data-time">
          <label>Seleziona data:</label>
          <input type="date" />
          <label>Seleziona ora:</label>
          <input type="time" />
        </div>
      </div>
      <button>Prenota</button>
      <div className="tabella">
        <h3>Appuntamenti:</h3>
      </div>
      <div className="tabella">
        <h3>Appuntamenti:</h3>
        <Tabella />
      </div>
      <footer>
        <img src={drbuddy} alt="drbuddy" />
        <p>© 2023 Team 1 All Rights Reserved.</p>
        <div className="social-icon">
          <img src="" alt="fb" />
          <img src="" alt="inst" />
          <img src="" alt="twit" />
        </div>
      </footer>
    </div>
  );
}
