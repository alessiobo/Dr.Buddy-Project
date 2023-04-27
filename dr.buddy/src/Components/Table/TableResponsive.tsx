import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";

type appuntamento = {
  id_reservation: number;
  firstname: string;
  lastname: string;
  email: string;
  tel_num: string;
  password: string;
  ora: string;
};

function TableResponsive({
  title = "",
  typeID = "num",
  buttons = false,
  getAllReservations,
}: {
  title?: string;
  typeID?: string;
  buttons?: boolean;
  getAllReservations: any;
}) {
  return (
    <TableContainer>
      <h3>{title}:</h3>
      <Table responsive="xl">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Ora</th>
          </tr>
        </thead>
        <tbody>
          {getAllReservations &&
            getAllReservations.map((el: appuntamento) => {
              return (
                <tr key={el.id_reservation}>
                  <td>{el.id_reservation}</td>
                  <td>{el.firstname}</td>
                  <td>{el.lastname}</td>
                  <td>{el.tel_num}</td>
                  <td>{el.email}</td>
                  <td>{el.ora}</td>

                  {buttons && (
                    <td>
                      <Button variant="success">Accetta</Button>
                    </td>
                  )}
                  {buttons && (
                    <td>
                      <Button variant="danger">Elimina</Button>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default TableResponsive;
