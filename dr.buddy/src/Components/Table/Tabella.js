import React, { useState, useEffect } from "react";

import TableContainer from "../../UI/Container/TableContainer/TableContainer";
import "./Tabella.css";
import CardPrenotazione from "../../UI/Cards/CardPrenotazione/CardPrenotazione";

function Tabella({ getAllReservationByID }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await getAllReservationByID(1));
    }
    fetchData();
  }, [getAllReservationByID]);

  function getHour(dataPlusOra) {
    const ora = Number(dataPlusOra.substring(11, 13)) + 2;
    let min = Number(dataPlusOra.substring(14, 16));
    if (min === 0) {
      //@ts-ignore
      min += "0";
    }
    return ora + ":" + min;
  }

  function getData(dataPlusOra) {
    return dataPlusOra.substring(0, 10).split("-").reverse().join("-");
  }

  return (
    <TableContainer>
      <h3>Visite prenotate:</h3>
      <div style={{ padding: "0 1.2%" }}>
        <CardPrenotazione doc={true} />
        {data.length > 0 &&
          data?.map((el, k) => {
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

export default Tabella;
