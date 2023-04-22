import React from "react";
import Table from "react-bootstrap/Table";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";
import "./Tabella.css";

interface Appointment {
  date: string;
  time: string;
  visit: string;
}

interface TabellaProps {
  appointments: Appointment[];
}

function Tabella({ appointments }: TabellaProps) {
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
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.visit}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tabella;
