import { useState } from "react";
import "./partclient.css";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import BookingCard from "../../Components/BookingCard/BookingCard";
import Tabella from "../../Components/Table/Tabella";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function PartClient({
  createReservation,
  getAllReservationByID,
}: {
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
      <Navbar />
      <div className="user-logo">
        <UserLoginPic name="Mario Rossi" />
      </div>
      {/* <BookingCard onBook={handleBook} /> */}
      <BookingCard createReservation={createReservation} />
      <Tabella getAllReservationByID={getAllReservationByID} />
      <Footer />
    </div>
  );
}
