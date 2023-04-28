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
  date_reservation: string;
};

function TableResponsive({
  title = "",
  buttons = false,
  getAllReservations,
}: {
  title?: string;
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
            <th>Nome e Cognome</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Data</th>
            <th>Ora</th>
          </tr>
        </thead>
        <tbody>
          {getAllReservations &&
            getAllReservations.map((el: appuntamento) => {
              return (
                <tr key={el.id_reservation}>
                  <td>{el.id_reservation}</td>
                  <td>
                    {el.firstname} {el.lastname}
                  </td>
                  <td>{el.tel_num}</td>
                  <td>{el.email}</td>
                  <td>{el.date_reservation.split("-").reverse().join("/")}</td>
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
