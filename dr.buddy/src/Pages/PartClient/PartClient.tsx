import { useState } from "react";
import "./partclient.css";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import BookingCard from "../../Components/BookingCard/BookingCard";
import Tabella from "../../Components/Table/Tabella";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

interface Appointment {
  date: string;
  time: string;
  visit: string;
}

export default function Drbuddy() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [bookedDateTime, setBookedDateTime] = useState<Date | null>(null);

  function handleBook(dateTime: Date) {
    const newAppointment = { date: dateTime.toLocaleDateString(), time: dateTime.toLocaleTimeString(), visit: "Visita di Controllo" };
    setAppointments([...appointments, newAppointment]);
    setBookedDateTime(dateTime);
  }

  return (
    <div>
      <Navbar />
      <div className="user-logo">
        <UserLoginPic name="Utente x" />
      </div>
      <BookingCard onBook={handleBook} />
      <Tabella appointments={appointments} />
      <Footer />
    </div>
  );
}
