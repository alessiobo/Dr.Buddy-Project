import TableCalendar from "../DoctorPageComponents/TableCalendar/TableCalendar";
import TablePatients from "../DoctorPageComponents/TablePatients/TablePatients";
import AppointmentTable from "../Table/AppointmentTable/AppointmentTable";
import TableCardsReservations from "../Table/TableCardsReservations/TableCardsReservations";

import "./doctorMainSection.css";

function DoctorMainSection({
  updateReservation,
  getAllReservations,
  getAllPatients,
  showMainComp,
  getAllReservationByDoctorID,
}) {
  return (
    <section className="doctorMainSection-cont">
      {showMainComp.reservations === true && (
        <TableCardsReservations
          getAllReservationByDoctorID={getAllReservationByDoctorID}
        />
      )}
      {showMainComp.patients === true && (
        <TablePatients getAllPatients={getAllPatients} />
      )}
      {showMainComp.calendar === true && (
        <TableCalendar getAllReservations={getAllReservations} />
      )}

      {/* <TableCardsReservations getAllReservations={getAllReservations} /> */}
      {/* <TablePatients getAllPatients={getAllPatients} /> */}

      <AppointmentTable getAllReservations={getAllReservations} />
    </section>
  );
}

export default DoctorMainSection;
