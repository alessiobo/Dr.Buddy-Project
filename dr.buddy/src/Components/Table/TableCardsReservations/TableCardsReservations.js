import { useEffect, useState } from "react";
import CardPrenotazione from "../../../UI/Cards/CardPrenotazione/CardPrenotazione";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tableCardsReservations.css";

function TableCardsReservations({ getAllReservationByDoctorID }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await getAllReservationByDoctorID(1));
    }
    fetchData();
    // console.log(data);
  }, [getAllReservationByDoctorID]);

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
      <h3>Nuove Prenotazioni:</h3>
      <div style={{ padding: "0 1.2%" }}>
        <CardPrenotazione />
        {data &&
          data.map((el, k) => {
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

export default TableCardsReservations;
