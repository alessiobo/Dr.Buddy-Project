import Table from "react-bootstrap/Table";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";
import "./Tabella.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Tabella({ getAllReservationByID }: { getAllReservationByID: any }) {
  const [data, setData] = useState([]);

  const getAllR = async () => {
    setData(await getAllReservationByID(1));
  };

  return (
    <div className="booked-tab">
      <Button variant="info" onClick={getAllR}>
        Mostra
      </Button>
      <TableContainer>
        <h3 style={{ margin: "0" }}>Visite Prenotate</h3>
        <Table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Ora</th>
              <th>Stato</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((el: any) => {
                return (
                  <tr key={el.id_reservation}>
                    <td>
                      {el.date_reservation.split("-").reverse().join("/")}
                    </td>
                    <td>{el.ora}</td>
                    <td>{el.stato}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tabella;