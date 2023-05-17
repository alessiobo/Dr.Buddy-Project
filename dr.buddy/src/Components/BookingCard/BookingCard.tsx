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
  const [doctorchoice, setDoctorchoice] = useState(1);
  const [reservation, setReservation] = useState([]);

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
      </div>
    </div>
  );
}

export default BookingCard;
