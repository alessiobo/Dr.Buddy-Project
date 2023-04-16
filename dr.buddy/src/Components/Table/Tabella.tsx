import Table from "react-bootstrap/Table";

function Tabella() {
  return (
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
  );
}

export default Tabella;
