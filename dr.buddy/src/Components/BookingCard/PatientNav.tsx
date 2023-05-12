import { useState } from "react";
import "./PatientNav.css";

function PatientNav() {
  const [showTable, setShowTable] = useState(false);
  const [showMainComp, setMainComp] = useState({
    reservations: true,
  });

  const handleButtonClick = () => {
    setShowTable(true);
  };
  return (
    <nav className="doc_nav-cont">
      <button>
        <img className="navDoctor-icon" alt="icon" /> <span>Dottori</span>
      </button>
      <button onClick={handleButtonClick}>
        <img className="navDoctor-icon" alt="icon" /> <span>Prenotazioni</span>
      </button>
      <button>
        <img className="navDoctor-icon" alt="icon" /> <span>Settings</span>
      </button>
    </nav>
  );
}

export default PatientNav;
