import CalendarBtn from "../../../UI/Buttons/CalendarButtons/CalendarBtn";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tableCalendar.css";

function TableCalendar({ getAllReservations }) {
  const startDate = new Date("2023-05-08");
  const endDate = new Date("2023-05-13");

  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  //   console.log(getAllReservations);

  // Filtra le prenotazioni in base alle date
  const weekReservations = getAllReservations.filter((reservation) => {
    if (reservation.id_doctor === 1) {
      //************************************Per ora solo mario id=1

      const date = getDateRes(reservation.date_reservation);

      return startDate >= date <= endDate;
    } else {
      return false;
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

  console.log(
    weekReservations.sort(
      (a, b) => getDateRes(a.date_reservation) - getDateRes(b.date_reservation)
    )
  );

  function getDateRes(dataPlusOra) {
    return dataPlusOra.substring(0, 10);
  }

  function getArrayWeek(ora, startDay, endDay, reservations) {
    const arrWeek = [];
    for (let i = startDay; i < endDay; i++) {
      let day = i < 10 ? "0" + i : i;
      const foundDay = reservations.find(
        (el) =>
          getHour(el.date_reservation) === ora &&
          getDateRes(el.date_reservation) === "2023-05-" + day + ""
      );

      arrWeek[i] = foundDay || null;
    }

    return arrWeek;
  }

  // console.log(getArrayWeek("9:30", 8, 13, weekReservations));
  <CalendarBtn take={true} />;

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
            {getArrayWeek("8:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>9:00</td>
            {getArrayWeek("9:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>9:30</td>
            {getArrayWeek("9:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>10:00</td>
            {getArrayWeek("10:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>10:30</td>
            {getArrayWeek("10:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>11:00</td>
            {getArrayWeek("11:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>11:30</td>
            {getArrayWeek("11:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>14:00</td>
            {getArrayWeek("14:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>14:30</td>
            {getArrayWeek("14:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>15:00</td>
            {getArrayWeek("15:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>15:30</td>
            {getArrayWeek("15:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>16:00</td>
            {getArrayWeek("16:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>16:30</td>
            {getArrayWeek("16:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            <td>17:00</td>
            {getArrayWeek("17:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      "-"
                    ) : el.id_patient === null ? (
                      <CalendarBtn />
                    ) : (
                      <CalendarBtn take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
}

export default TableCalendar;
