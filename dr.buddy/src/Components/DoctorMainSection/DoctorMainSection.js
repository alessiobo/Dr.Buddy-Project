import useServer from "../../Hooks/useServer";
import TableCalendar from "../DoctorPageComponents/TableCalendar/TableCalendar";
import TablePatients from "../DoctorPageComponents/TablePatients/TablePatients";
import AppointmentTable from "../Table/AppointmentTable/AppointmentTable";
import TableCardsReservations from "../Table/TableCardsReservations/TableCardsReservations";

import "./doctorMainSection.css";

function DoctorMainSection({ showMainComp }) {
  const {
    getAllReservationByDoctorID,
    updateObj: updateReservation,
    data: getAllReservations,
    createObj: createReservation,
  } = useServer("reservations");

  return (
    <section className="doctorMainSection-cont">
      {showMainComp.reservations === true && (
        <>
          <AppointmentTable
            getAllReservationByDoctorID={getAllReservationByDoctorID}
          />
          <TableCardsReservations
            getAllReservationByDoctorID={getAllReservationByDoctorID}
            updateReservation={updateReservation}
          />
        </>
      )}
      {showMainComp.patients === true && <TablePatients />}
      {showMainComp.calendar === true && (
        <TableCalendar
          getAllReservations={getAllReservations}
          createReservation={createReservation}
        />
      )}
    </section>
  );
}

export default DoctorMainSection;
