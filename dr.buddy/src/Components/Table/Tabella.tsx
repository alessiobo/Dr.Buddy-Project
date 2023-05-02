import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";
import "./Tabella.css";

function Tabella({ getAllReservationByID }: { getAllReservationByID: any }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await getAllReservationByID(1));
    }
    fetchData();
  }, [getAllReservationByID]);

  return (
    <div className="booked-tab">
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