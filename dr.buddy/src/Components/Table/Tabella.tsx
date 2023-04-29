import React from "react";
import Table from "react-bootstrap/Table";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";
import "./Tabella.css";

function Tabella({ getAllReservationByID }: { getAllReservationByID: any }) {
  const data = getAllReservationByID;
  // console.log(data);

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
              <th>Stato</th>
            </tr>
          </thead>
          <tbody>
            {/* {data &&
              data.map((el: any) => {
                return (
                  <tr key={el.id_reservation}>
                    <td>
                      {el.firstname} {el.lastname}
                    </td>
                  </tr>
                );
              })} */}
            {/* <tr>
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
            </tr> */}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tabella;
