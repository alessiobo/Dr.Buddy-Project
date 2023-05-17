import { useState, useEffect } from "react";
import "./BookingCard.css";

import "../../UI/Buttons/CalendarButtons/calendarBtn.css";

function BookingCard({
  updateReservation,
  getAllReservationByDoctorID,
}: {
  updateReservation: any;
  getAllReservationByDoctorID: any;
}) {
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const [isBookingVisible, setIsBookingVisible] = useState(false);
  const [doctorchoice, setDoctorchoice] = useState(1);
  const [reservation, setReservation] = useState([]);

  // const createReservationHandler = (ev: any) => {
  //   ev.preventDefault();
  //   const reserv = {
  //     id_patient: 1, //per ora solo Mario
  //     data: date,
  //     ora: time,
  //     stato: "⏳",
  //   };

  //   createReservation(reserv);
  //   setDate("");
  //   setTime("");
  // };

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
      const res = await getAllReservationByDoctorID(doctorchoice);
      setReservation(res);
    }
    getDoctor();
  }, [doctorchoice]);

  return (
    <div className="BookingCard">
      <div className="toggle-btn-wrapper">
        <div>
          <h1>qui tutte le prenotazione </h1>
          <button onClick={() => setDoctorchoice(1)}>Paperino</button>
          <button onClick={() => setDoctorchoice(2)}>Pluto</button>
          <div style={{ display: "flex", gap: "10px" }}>
            {reservation
              .filter((res: any) => res.id_patient === null)
              .map((res: any, k) => {
                return (
                  <div key={k}>
                    <h4>{res.date_reservation.substring(0, 10)}</h4>
                    <button
                      className="cal-btn-color"
                      onClick={() =>
                        updateReservation(res.id_reservation, {
                          id_patient: 1,
                          id_doctor: res.id_doctor,
                          date_reservation: res.date_reservation,
                        })
                      }
                    >
                      {getHour(res.date_reservation)}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        {/* <button
          className="toggle-btn"
          onClick={() => setIsBookingVisible(!isBookingVisible)}
        >
          {isBookingVisible ? "Nascondi prenotazione" : "Prenota visita"}
        </button> */}
      </div>
      {/* {isBookingVisible && (
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
                {/* {generateTimeOptions()} }
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
      )} */}
    </div>
  );
}

export default BookingCard;
