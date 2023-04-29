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
  stato: string;
};

function TableResponsive({
  title = "",
  buttons = false,
  getAllReservations,
  updateReservation,
}: {
  title?: string;
  buttons?: boolean;
  getAllReservations: any;
  updateReservation: any;
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
            <th>Stato</th>
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
                  <td>{el.stato}</td>

                  {buttons && el.stato !== "ok" && (
                    <td>
                      <Button
                        variant="success"
                        onClick={() =>
                          updateReservation(el.id_reservation, { stato: "ok" })
                        }
                      >
                        Accetta
                      </Button>
                    </td>
                  )}
                  {buttons && el.stato !== "ok" && (
                    <td>
                      <Button
                        variant="danger"
                        onClick={() =>
                          updateReservation(el.id_reservation, {
                            stato: "rifiutata",
                          })
                        }
                      >
                        Rifiuta
                      </Button>
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
