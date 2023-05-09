import useReservation from "../../../Hooks/useReservation";
import CalendarBtn from "../../../UI/Buttons/CalendarButtons/CalendarBtn";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tableCalendar.css";

function TableCalendar({ getAllReservations }) {
  const { startDay, endDay, weekReservations, getArrayWeek } = useReservation({
    startD: "2023-05-08",
    endD: "2023-05-13",
    getAllReservations,
    id: 1,
  });

  // const orari = [
  //   "8,30",
  //   "9,00",
  //   "9,30",
  //   "10,00",
  //   "10,30",
  //   "11,00",
  //   "11,30",
  //   "14,00",
  //   "14,30",
  //   "15,00",
  //   "15,30",
  //   "16,00",
  //   "16,30",
  //   "17,00",
  // ];

  // function getTabella(orari, startDay, endDay, weekReservations) {
  //   let tabella = [];

  //   for (const ora of orari) {
  //     tabella.push(
  //       <tr>
  //         <td>{ora}</td>
  //         {getArrayWeek({ ora }, startDay, endDay, weekReservations).map(
  //           (el, k) => {
  //             return (
  //               <td key={k}>
  //                 {el === null ? (
  //                   "-"
  //                 ) : el.id_patient === null ? (
  //                   <CalendarBtn />
  //                 ) : (
  //                   <CalendarBtn take={true} />
  //                 )}
  //               </td>
  //             );
  //           }
  //         )}
  //       </tr>
  //     );
  //   }

  //   return tabella;
  // }

  // const tabella = getTabella(orari, startDay, endDay, weekReservations);

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
          {/* {tabella.map((el, k) => {
            return el;
          })} */}
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
