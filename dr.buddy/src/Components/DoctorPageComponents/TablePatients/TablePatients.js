import CardPazienti from "../../../UI/Cards/CardPazienti/CardPazienti";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tablePatients.css";

function TablePatients({ getAllPatients }) {
  return (
    <TableContainer>
      <h3>Tutti i pazienti:</h3>
      <div style={{ padding: "0 1.2%" }}>
        <CardPazienti />
        {getAllPatients &&
          getAllPatients.map((el, k) => {
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
