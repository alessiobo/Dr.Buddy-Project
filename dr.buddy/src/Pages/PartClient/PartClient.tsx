import { useState } from "react";
import "./partclient.css";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import BookingCard from "../../Components/BookingCard/BookingCard";
import Tabella from "../../Components/Table/Tabella";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Drbuddy() {
  const [bookedDateTime, setBookedDateTime] = useState<Date | null>(null);

  function handleBook(dateTime: Date) {
    setBookedDateTime(dateTime);
  }

  return (
    <div className="upper-client">
      <Navbar />
      <UserLoginPic username="Utente x" />
      <BookingCard onBook={handleBook} />
      <div className="tabella">
        <h3>Appuntamenti:</h3>
      </div>
      <div className="tabella">
        <Tabella />
      </div>
      <Footer />
    </div>
  );
}
