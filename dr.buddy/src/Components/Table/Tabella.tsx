import Table from "react-bootstrap/Table";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";

function Tabella() {
  return (
    <TableContainer>
      <h3 style={{ margin: "0" }}>Visite Prenotate</h3>
    <Table striped="columns">
      <thead>
        <tr>
          <th>Data</th>
          <th>Ora</th>
          <th>Visita</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>18/04</td>
          <td>10.30</td>
          <td>Controllo x</td>
        </tr>
        <tr>
          <td>18/04</td>
          <td>10.30</td>
          <td>Controllo x</td>
        </tr>
        <tr>
          <td>18/04</td>
          <td>10.30</td>
          <td>Controllo x</td>
        </tr>
      </tbody>
    </Table>
    </TableContainer>
  );
}

export default Tabella;
