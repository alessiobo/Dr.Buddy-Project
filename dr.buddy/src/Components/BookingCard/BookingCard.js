import { useState, useEffect } from "react";
import "./bookingCard.css";

import "../../UI/Buttons/CalendarButtons/calendarBtn.css";
import CardDottore from "../../UI/Cards/CardDottore/CardDottore";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";

function BookingCard({
  updateReservation,
  getAllReservationByDoctorID,
  getAllDoctors,
}) {
  const [doctorchoice, setDoctorchoice] = useState(1);
  const [reservation, setReservation] = useState([]);
  // const [startIndex, setStartIndex] = useState(0);
  // const [numSlides, setNumSlides] = useState(3);

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

    const dataArr = dataPlusOra.substring(0, 10).split("-");
    const giorno = dataArr[2];
    const mese = nomiMesi[parseInt(dataArr[1]) - 1];
    const anno = dataArr[0];

    return `${giorno} ${mese} ${anno}`;
  }

  useEffect(() => {
    async function getDoctor() {
      const res = await getAllReservationByDoctorID(doctorchoice);
      setReservation(res);
    }
    getDoctor();
  }, [doctorchoice]);

  // const handlePrevSlide = () => {
  //   if (startIndex > 0) {
  //     setStartIndex(startIndex - numSlides);
  //   }
  // };

  // const handleNextSlide = () => {
  //   if (startIndex + numSlides < reservation.length) {
  //     setStartIndex(startIndex + numSlides);
  //   }
  // };

  return (
    <section>
      <h2>Scegli il Dottore: </h2>
      <div className="doctorsCards-container">
        {getAllDoctors &&
          getAllDoctors?.map((doc) => {
            return (
              <button
                className="btn-doctorsCards"
                onClick={() => setDoctorchoice(doc.id_doctor)}
              >
                <CardDottore doctor={doc} />
              </button>
            );
          })}
      </div>
      <TableContainer>
        <h3>Disponibilità:</h3>

        <div className="doctorsCards-diponibility">
          {/* <button class="handle left-handle" onClick={handlePrevSlide}>
            <div class="text">&#8249;</div>
          </button> */}
          {reservation
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
                          date_reservation: res.date_reservation,
                        })
                      }
                    >
                      {getHour(res.date_reservation)}
                    </button>
                  </div>
                </div>
              );
            })}
          {/* <button class="handle right-handle" onClick={handleNextSlide}>
            <div class="text">&#8250;</div>
          </button> */}
        </div>
      </TableContainer>
    </section>
  );
}

export default BookingCard;
