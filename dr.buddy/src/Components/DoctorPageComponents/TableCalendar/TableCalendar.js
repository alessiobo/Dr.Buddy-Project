import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tableCalendar.css";

function TableCalendar({ getAllReservations }) {
  const startDate = new Date("2023-05-08");
  const endDate = new Date("2023-05-13");

  //   console.log(getAllReservations);

  // Filtra le prenotazioni in base alle date
  const weekReservations = getAllReservations.filter((reservation) => {
    if (reservation.id_doctor === 1) {
      //************************************Per ora mario

      const date = getDateRes(reservation.date_reservation);

      return startDate >= date <= endDate;
    }
  });

  function getHour(dataPlusOra) {
    const ora = Number(dataPlusOra.substring(11, 13)) + 2;
    let min = Number(dataPlusOra.substring(14, 16));
    if (min === 0) {
      min += "0";
    }

    return ora + ":" + min;
  }

  //   console.log(weekReservations);

  function getDateRes(dataPlusOra) {
    return dataPlusOra.substring(0, 10);
  }

  return (
    <TableContainer>
      <h3>Calendario settimanale: da 08 a 12</h3>

      <table className="tb_calendar-cont">
        <thead>
          <tr>
            <th></th>
            <th>Lunedì</th>
            <th>Martedì</th>
            <th>Mercoledì</th>
            <th>Giovedì</th>
            <th>Venerdì</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:30</td>
            {weekReservations.map((res) => {
              return (
                <td key={res.id_reservation}>
                  {getHour(res.date_reservation) === "8:30" ? (
                    <span>ok</span>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              );
            })}
          </tr>
          <tr>
            <td>9:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>9:30</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>10:30</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>11:30</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>14:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>14:30</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>15:30</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>16:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>16:30</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>17:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
}

export default TableCalendar;
