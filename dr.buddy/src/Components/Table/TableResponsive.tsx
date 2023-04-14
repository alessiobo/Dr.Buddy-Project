import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";

type appuntamento = {
  ora: number;
  paziente: { nome: string; cognome: string };
  telefono: number;
};

function TableResponsive({
  title = "",
  typeID = "num",
  placeholderJSON,
}: {
  title?: string;
  typeID?: string;
  placeholderJSON?: Record<string, any>;
}) {
  return (
    <TableContainer>
      <h3>{title}:</h3>
      <Table responsive="xl">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {placeholderJSON &&
            placeholderJSON.map((el: appuntamento, k: number) => {
              return (
                <tr key={k}>
                  <td>{el.ora}:00</td>
                  <td>{el.paziente.nome}</td>
                  <td>{el.paziente.cognome}</td>
                  <td>{el.telefono}</td>
                </tr>
              );
            })}
          {/* <tr>
            <td>1</td>
            <td>Pippo</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr> */}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default TableResponsive;
