import { useState, useEffect } from "react";
import "./BookingCard.css";

function BookingCard({ createReservation, getAllReservationByDoctorID }: { createReservation: any, getAllReservationByDoctorID: any}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isBookingVisible, setIsBookingVisible] = useState(false);
  const [doctorchoice,  setDoctorchoice] = useState({});
  const [reservation, setReservation] = useState([]);
  console.log(getAllReservationByDoctorID)
  const createReservationHandler = (ev: any) => {
    ev.preventDefault();
    const reserv = {
      id_patient: 1, //per ora solo Mario
      data: date,
      ora: time,
      stato: "⏳",
    };

    createReservation(reserv);
    setDate("");
    setTime("");
  };

  function generateTimeOptions() {
    const options = [];

    for (let hour = 8; hour < 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;

        options.push(
          <option key={timeString} value={timeString}>
            {timeString}
          </option>
        );
      }
    }

    return options;
  }

  function getHour(dataPlusOra: any) {
    const ora = Number(dataPlusOra.substring(11, 13)) + 2;
    let min = Number(dataPlusOra.substring(14, 16));
    if (min === 0) {
      //@ts-ignore
      min += "0";
    }
    return ora + ":" + min;
  }
  //da qui parte la chiamata per i dottori

  useEffect(() => {
    async function getDoctor() {
      const res = await getAllReservationByDoctorID(1)
      setReservation(res)
    } 
    getDoctor()
  }, [doctorchoice])  
  

  return (
    <div className="BookingCard">
      <div className="toggle-btn-wrapper">
        <div> check prenotazioni
         <h1>qui tutte le prenotazione </h1>
          <button onClick={() => setDoctorchoice(1)}>Paperino</button>
          <button onClick={() => setDoctorchoice(2)}>Pluto</button>
          {reservation && reservation?.map((res : any) => {return <li>{res.date_reservation}</li>})}
        </div>
        <button
          className="toggle-btn"
          onClick={() => setIsBookingVisible(!isBookingVisible)}
        >
          {isBookingVisible ? "Nascondi prenotazione" : "Prenota visita"}
        </button>
      </div>
      {isBookingVisible && (
        <div className="booked-card">
          <h3 className="card-title" style={{ margin: "0" }}>
            Prenota qui la tua visita
          </h3>
          <div className="booking-card">
            <form className="form-style">
              <label className="style-label">Data</label>
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
              <label className="style-label">Orario</label>
              <select
                className="time-select"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              >
                <option value="" />
                {generateTimeOptions()}
              </select>
              <button
                className="booking-btn"
                onClick={createReservationHandler}
              >
                Prenota
              </button>
            </form>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingCard;
