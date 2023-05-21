import { useState, useEffect } from "react";
import "./bookingCard.css";

import "../../UI/Buttons/CalendarButtons/calendarBtn.css";
import CardDottore from "../../UI/Cards/CardDottore/CardDottore";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";
function BookingCard({
  updateReservation,
  getAllReservationByDoctorID,
  getAllDoctors,
  force,
}) {
  const [doctorchoice, setDoctorchoice] = useState(1);
  const [reservation, setReservation] = useState([]);
  const [doctors, setDoctors] = useState([]);

  function getHour(dataPlusOra) {
    const ora = Number(dataPlusOra.substring(11, 13)) + 2;
    let min = Number(dataPlusOra.substring(14, 16));
    if (min === 0) {
      min += "0";
    }
    return ora + ":" + min;
  }
  //da qui parte la chiamata per i dottori

  function getData(dataPlusOra) {
    const nomiMesi = [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre",
    ];

    const dataArr = dataPlusOra?.substring(0, 10).split("-");
    const giorno = dataArr[2];
    const mese = nomiMesi[parseInt(dataArr[1]) - 1];
    const anno = dataArr[0];

    return `${giorno} ${mese} ${anno}`;
  }

  useEffect(() => {
    async function getDoctor() {
      const res = await getAllReservationByDoctorID(doctorchoice);
      const doctors = await getAllDoctors;
      setDoctors(doctors);
      setReservation(res);
    }
    getDoctor();
  }, [doctorchoice, getAllReservationByDoctorID]);

  return (
    <section>
      <h2 id="scegli_il_dottore">Scegli il Dottore: </h2>
      <input style={{ display: "none" }} value={force} />
      <div className="doctorsCards-container">
        {doctors === null ||
        doctors === undefined ||
        !Array.isArray(doctors) ? (
          <div>is loading...</div>
        ) : (
          doctors?.map((doc) => {
            return (
              <button
                className="btn-doctorsCards"
                onClick={() => setDoctorchoice(doc.id_doctor)}
              >
                <CardDottore doctor={doc} />
              </button>
            );
          })
        )}
      </div>
      <TableContainer>
        <h3>Disponibilità:</h3>
        <div className="doctorsCards-disponibility">
          {reservation === null ||
          reservation === undefined ||
          !Array.isArray(reservation) ? (
            <div>is loading...</div>
          ) : (
            reservation
              ?.filter((res) => res.id_patient === null)
              ?.map((res, k) => {
                return (
                  <div className="container-slider" key={k}>
                    <div className="slider">
                      <h4 className="data-style">
                        {getData(res.date_reservation)}
                      </h4>
                    </div>
                    <div className="button-time">
                      <button
                        className="cal-btn-color button-time"
                        onClick={() =>
                          updateReservation(res.id_reservation, {
                            id_patient: 1,
                            id_doctor: res.id_doctor,
                          })
                        }
                      >
                        {getHour(res.date_reservation)}
                      </button>
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </TableContainer>
    </section>
  );
}

export default BookingCard;
