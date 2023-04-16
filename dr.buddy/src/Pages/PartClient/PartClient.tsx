import "./partclient.css";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import Tabella from "../../Components/Table/Tabella";


export default function Drbuddy() {
  return (
    <div className="upper-client">
      <UserLoginPic username="Utente x" />
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
        <Tabella />
      </div>
    </div>
  );
}
