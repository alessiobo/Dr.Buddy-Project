import CardPazienti from "../../../UI/Cards/CardPazienti/CardPazienti";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tablePatients.css";

import { useState, useEffect } from "react";

function TablePatients({ getAllPatients }) {
  const [pazienti, setPazienti] = useState([]);

  useEffect(() => {
    async function getPazienti() {
      setPazienti(await getAllPatients);
    }
    getPazienti();
  }, [getAllPatients]);

  return (
    <TableContainer>
      <h3>Tutti i pazienti:</h3>
      <div style={{ padding: "0 1.2%" }}>
        <CardPazienti />

        {pazienti.length > 0 &&
          pazienti?.map((el, k) => {
            return (
              <CardPazienti
                key={k}
                id={el.id_patient}
                paziente={el.firstname + " " + el.lastname}
                email={el.email}
                tel_num={el.tel_num}
              />
            );
          })}
      </div>
    </TableContainer>
  );
}

export default TablePatients;
