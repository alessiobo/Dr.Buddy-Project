import { useState, useEffect } from "react";
import "./bookingCard.css";

import "../../UI/Buttons/CalendarButtons/calendarBtn.css";
import CardDottore from "../../UI/Cards/CardDottore/CardDottore";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";

function BookingCard({
  updateReservation,
  getAllReservationByDoctorID,
  getAllDoctors,
}: {
  updateReservation: any;
  getAllReservationByDoctorID: any;
  getAllDoctors: any;
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
    // <div className="BookingCard">
    <div>
      <div>
        {/* <div className="toggle-btn-wrapper"> */}
        <div>
          <h2>Scegli il Dottore: </h2>
          <div className="doctorsCards-container">
            {getAllDoctors?.map((doc: any) => {
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
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
