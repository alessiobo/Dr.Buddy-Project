import useServer from "../../../Hooks/useServer";
import CardPazienti from "../../../UI/Cards/CardPazienti/CardPazienti";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tablePatients.css";

function TablePatients() {
  const { data } = useServer("patients");

  return (
    <TableContainer>
      <h3>Tutti i pazienti:</h3>
      <div style={{ padding: "0 1.2%" }}>
        <CardPazienti />
        {data === undefined || data === null || !Array.isArray(data) ? (
          <div>Loading...</div>
        ) : (
          data &&
          data.map((el, k) => {
            return (
              <CardPazienti
                key={k}
                id={el.id_patient}
                paziente={el.firstname + " " + el.lastname}
                email={el.email}
                tel_num={el.tel_num}
              />
            );
          })
        )}
      </div>
    </TableContainer>
  );
}

export default TablePatients;
