import "./partclient.css";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import BookingCard from "../../Components/BookingCard/BookingCard";
import Tabella from "../../Components/Table/Tabella";
import Footer from "../../Components/Footer/Footer";
import useServer from "../../Hooks/useServer";

import { useState } from "react";

export default function PartClient() {
  const [forceUp, setForceUp] = useState(false);
  const { getOneObj: getOnePatient } = useServer("patients");
  const { data: getAllDoctors } = useServer("doctors");
  const {
    updateObj: updateReservation,
    getAllReservationByDoctorID,
    getAllReservationByPatientID,
  } = useServer("reservations");

  return (
    <div className="patient_page-container">
      <section className="patient_page-section">
        {/* <button onClick={() => setForceUp(!forceUp)}>Aggiorna</button> */}
        <UserLoginPic force={forceUp} getOnePatient={getOnePatient} />
        <BookingCard
          force={forceUp}
          updateReservation={updateReservation}
          getAllReservationByDoctorID={getAllReservationByDoctorID}
          getAllDoctors={getAllDoctors}
        />

        <Tabella
          force={forceUp}
          getAllReservationByID={getAllReservationByPatientID}
        />
      </section>

      <Footer />
    </div>
  );
}
