import { useEffect, useState } from "react";
import CardPrenotazione from "../../../UI/Cards/CardPrenotazione/CardPrenotazione";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tableCardsReservations.css";

function TableCardsReservations({ getAllReservations }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await getAllReservations(1));
    }
    fetchData();
    console.log(data);
  }, [getAllReservations]);

  return (
    <TableContainer>
      <h3>Nuove Prenotazioni:</h3>
      <CardPrenotazione />
      {data &&
        data.map((el) => {
          return (
            <CardPrenotazione
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
    </TableContainer>
  );
}

export default TableCardsReservations;
