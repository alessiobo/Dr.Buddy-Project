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
                ora={el.date_reservation.substring(11, 16)}
              />
            );
          })}
      </div>
    </TableContainer>
  );
}

export default TableCardsReservations;
