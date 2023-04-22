import Table from "react-bootstrap/Table";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";
import "./Tabella.css"

function Tabella() {
  return (
    <div className="booked-tab">
    <TableContainer>
      <h3 style={{ margin: "0" }}>Visite Prenotate</h3>
      <Table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Ora</th>
            <th>Visita</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>18/04/2023</td>
            <td>10.30</td>
            <td>Controllo x</td>
          </tr>
          <tr>
            <td>18/04/2023</td>
            <td>10.30</td>
            <td>Controllo x</td>
          </tr>
          <tr>
            <td>18/04/2023</td>
            <td>10.30</td>
            <td>Controllo x</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Tabella;
