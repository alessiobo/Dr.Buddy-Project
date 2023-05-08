import { useEffect, useState } from "react";
import CardPrenotazione from "../../../UI/Cards/CardPrenotazione/CardPrenotazione";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./appointmentTable.css";

function AppointmentTable({ getAllReservationByDoctorID }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await getAllReservationByDoctorID(1));
    }
    fetchData();
    // console.log(data);
  }, [getAllReservationByDoctorID]);

  const today = new Date();
  const todayString = today.toISOString().substring(0, 10);

  console.log(today);
  console.log(todayString);

  const todayApp =
    data &&
    data.filter((app) => {
      if (app.id_doctor === 1) {
        return app.date_reservation.substring(0, 10) === todayString;
      }
    });

  console.log(todayApp);

  function getHour(dataPlusOra) {
    const ora = Number(dataPlusOra.substring(11, 13)) + 2;
    let min = Number(dataPlusOra.substring(14, 16));
    if (min === 0) {
      min += "0";
    }

    return ora + ":" + min;
  }

  return (
    <TableContainer>
      <h3>Appuntamenti di oggi:</h3>
      <div style={{ padding: "0 1.2%" }}>
        <CardPrenotazione />
        {todayApp &&
          todayApp.map((el, k) => {
            return (
              <CardPrenotazione
                key={k}
                id={el.id_reservation}
                paziente={el.firstname + " " + el.lastname}
                data={el.date_reservation
                  .substring(0, 10)
                  .split("-")
                  .reverse()
                  .join("-")}
                ora={getHour(el.date_reservation)}
              />
            );
          })}
      </div>
    </TableContainer>
  );
}

export default AppointmentTable;
