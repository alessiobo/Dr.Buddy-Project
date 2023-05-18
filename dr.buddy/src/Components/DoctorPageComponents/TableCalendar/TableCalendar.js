import useReservation from "../../../Hooks/useReservation";
import AddCalendarBtn from "../../../UI/Buttons/CalendarButtons/AddCalendarBtn";
import CalendarBtn from "../../../UI/Buttons/CalendarButtons/CalendarBtn";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./tableCalendar.css";

function TableCalendar({ getAllReservations, createReservation }) {
  const { startDay, endDay, weekReservations, getArrayWeek } = useReservation({
    startD: "2023-05-22",
    endD: "2023-05-27",
    getAllReservations,
    id: 1,
  });

  return (
    <TableContainer>
      <h3>Calendario settimanale: da 22 a 26</h3>

      <table className="tb_calendar-cont">
        <thead>
          <tr>
            <th>Lunedì</th>
            <th>Martedì</th>
            <th>Mercoledì</th>
            <th>Giovedì</th>
            <th>Venerdì</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {getArrayWeek("8:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn
                        createReservation={createReservation}
                        date={`2023-05-${startDay} 08:30:00`}
                      />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"8:30"} />
                    ) : (
                      <CalendarBtn ora={"8:30"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("9:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"9:00"} />
                    ) : (
                      <CalendarBtn ora={"9:00"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("9:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"9:30"} />
                    ) : (
                      <CalendarBtn ora={"9:30"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("10:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"10:00"} />
                    ) : (
                      <CalendarBtn ora={"10:00"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("10:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"10:30"} />
                    ) : (
                      <CalendarBtn ora={"10:30"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("11:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"11:00"} />
                    ) : (
                      <CalendarBtn ora={"11:00"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("11:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"11:30"} />
                    ) : (
                      <CalendarBtn ora={"11:30"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("14:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"14:00"} />
                    ) : (
                      <CalendarBtn ora={"14:00"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("14:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"14:30"} />
                    ) : (
                      <CalendarBtn ora={"14:30"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("15:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"15:00"} />
                    ) : (
                      <CalendarBtn ora={"15:00"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("15:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"15:30"} />
                    ) : (
                      <CalendarBtn ora={"15:30"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("16:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"16:00"} />
                    ) : (
                      <CalendarBtn ora={"16:00"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("16:30", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"16:30"} />
                    ) : (
                      <CalendarBtn ora={"16:30"} take={true} />
                    )}
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {getArrayWeek("17:00", startDay, endDay, weekReservations).map(
              (el, k) => {
                return (
                  <td key={k}>
                    {el === null ? (
                      <AddCalendarBtn />
                    ) : el.id_patient === null ? (
                      <CalendarBtn ora={"17:00"} />
                    ) : (
                      <CalendarBtn ora={"17:00"} take={true} />
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
