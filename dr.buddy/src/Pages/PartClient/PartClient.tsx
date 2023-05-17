import "./partclient.css";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import BookingCard from "../../Components/BookingCard/BookingCard";
import Tabella from "../../Components/Table/Tabella";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function PartClient({
  updateReservation,
  getAllReservationByID,
  getOnePatient,
  getAllReservationByDoctorID,
  getAllDoctors,
}: {
  updateReservation: any;
  getAllReservationByID: any;
  getOnePatient: any;
  getAllReservationByDoctorID: any;
  getAllDoctors: any;
}) {
  return (
    <div className="patient_page-container">
      <Navbar />
      <section className="patient_page-section">
        <BookingCard
          updateReservation={updateReservation}
          getAllReservationByDoctorID={getAllReservationByDoctorID}
          getAllDoctors={getAllDoctors}
        />

        <UserLoginPic getOnePatient={getOnePatient} />

        <Tabella getAllReservationByID={getAllReservationByID} />
      </section>

      <Footer />
    </div>
  );
}
