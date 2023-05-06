import "./doctorNavbar.css";

import i_orari from "./icons/orari.svg";
import i_pazienti from "./icons/pazienti.svg";
import i_prenotazioni from "./icons/prenotazioni.svg";
import i_settings from "./icons/settings.svg";

function DoctorNavbar({ setMainComp }) {
  return (
    <nav className="doc_nav-cont">
      <button onClick={() => setMainComp({ patients: true })}>
        <img className="navDoctor-icon" src={i_pazienti} alt="icon" />{" "}
        <span>Pazienti</span>
      </button>
      <button onClick={() => setMainComp({ calendar: true })}>
        <img className="navDoctor-icon" src={i_orari} alt="icon" />{" "}
        <span>Calendario</span>
      </button>
      <button onClick={() => setMainComp({ reservations: true })}>
        <img className="navDoctor-icon" src={i_prenotazioni} alt="icon" />
        <span>Prenotazioni</span>
      </button>
      <button onClick={() => setMainComp({ settings: true })}>
        <img className="navDoctor-icon" src={i_settings} alt="icon" />{" "}
        <span>Settings</span>
      </button>
    </nav>
  );
}

export default DoctorNavbar;
