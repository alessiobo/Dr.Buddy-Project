import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function TableResponsive() {
  return (
    <div>
      <h3>Nuove Prenotazioni:</h3>
      <Table responsive="xl">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Cognome</th>
            <th>età</th>
            <th>Sintomi</th>
            <th>Data</th>
            <th>Urgenza</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pippo</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <Button variant="success">Accept</Button>{" "}
              <Button variant="danger">Delete</Button>{" "}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <Button variant="success">Accept</Button>{" "}
              <Button variant="danger">Delete</Button>{" "}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <Button variant="success">Accept</Button>{" "}
              <Button variant="danger">Delete</Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableResponsive;
