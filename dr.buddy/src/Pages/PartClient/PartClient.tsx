import "./partclient.css";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import BookingCard from "../../Components/BookingCard/BookingCard";
import Tabella from "../../Components/Table/Tabella";
import Footer from "../../Components/Footer/Footer";
import useServer from "../../Hooks/useServer";

export default function PartClient() {
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
        <UserLoginPic getOnePatient={getOnePatient} />
        <BookingCard
          updateReservation={updateReservation}
          getAllReservationByDoctorID={getAllReservationByDoctorID}
          getAllDoctors={getAllDoctors}
        />

        <Tabella getAllReservationByID={getAllReservationByPatientID} />
      </section>

      <Footer />
    </div>
  );
}
