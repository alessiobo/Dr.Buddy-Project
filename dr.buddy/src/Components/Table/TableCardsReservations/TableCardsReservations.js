import { useEffect, useState } from "react";
import CardPrenotazione from "../../../UI/Cards/CardPrenotazione/CardPrenotazione";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tableCardsReservations.css";

function TableCardsReservations({ getAllReservationByDoctorID }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getAllByID = await getAllReservationByDoctorID(1);
      const filterPrenotations = await getAllByID.filter(
        (res) => res.firstname !== null
      );

      setData(filterPrenotations);
    }
    fetchData();
    // console.log(data);
  }, [getAllReservationByDoctorID]);

  function getHour(dataPlusOra) {
    const ora = Number(dataPlusOra.substring(11, 13)) + 4;
    let min = Number(dataPlusOra.substring(14, 16));
    if (min === 0) {
      min += "0";
    }

    return ora + ":" + min;
  }

  function getData(dataPlusOra) {
    return dataPlusOra.substring(0, 10).split("-").reverse().join("-");
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
                data={getData(el.date_reservation)}
                ora={getHour(el.date_reservation)}
              />
            );
          })}
      </div>
    </TableContainer>
  );
}

export default TableCardsReservations;
