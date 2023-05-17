import "./partclient.css";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import BookingCard from "../../Components/BookingCard/BookingCard";
import Tabella from "../../Components/Table/Tabella";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function PartClient({
  getOnePatient,
  createReservation,
  getAllReservationByID,
  getOnePatient,
}: {
  getOnePatient: any;
  createReservation: any;
  getAllReservationByID: any;
  getOnePatient: any;
}) {
  return (
    <div>
      <Navbar />

      <div className="patient-page">
        <BookingCard createReservation={createReservation} />
        <UserLoginPic getOnePatient={getOnePatient} />
      </div>
      <Tabella getAllReservationByID={getAllReservationByID} />
      <Footer />
    </div>
  );
}
