import { useState, useEffect } from "react";
import "./partclient.css";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import BookingCard from "../../Components/BookingCard/BookingCard";
import Tabella from "../../Components/Table/Tabella";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PatientNav from "../../Components/BookingCard/PatientNav";

export default function PartClient({
  getOnePatient,
  createReservation,
  getAllReservationByID,
}: {
  getOnePatient: any;
  createReservation: any;
  getAllReservationByID: any;
}) {
  // const [bookedDateTime, setBookedDateTime] = useState<Date | null>(null);

  // function handleBook(dateTime: Date) {
  //   setBookedDateTime(dateTime);
  // }

  //! errore Promise
  

  return (
    <div>
      <Navbar showButton={false} />
      {/* <PatientNav /> */}
      <div className="patient-page">
        <BookingCard createReservation={createReservation} />
        <UserLoginPic getOnePatient={getOnePatient} />
      </div>
      <Tabella getAllReservationByID={getAllReservationByID} />
      <Footer />
    </div>
  );
}
