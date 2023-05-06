import TablePatients from "../DoctorPageComponents/TablePatients/TablePatients";
import AppointmentTable from "../Table/AppointmentTable/AppointmentTable";
import TableCardsReservations from "../Table/TableCardsReservations/TableCardsReservations";

import "./doctorMainSection.css";

function DoctorMainSection({
  updateReservation,
  getAllReservations,
  getAllPatients,
  showMainComp,
}) {
  return (
    <section className="doctorMainSection-cont">
      {showMainComp.reservations === true && (
        <TableCardsReservations getAllReservations={getAllReservations} />
      )}
      {showMainComp.patients === true && (
        <TablePatients getAllPatients={getAllPatients} />
      )}

      {/* <TableCardsReservations getAllReservations={getAllReservations} /> */}
      {/* <TablePatients getAllPatients={getAllPatients} /> */}

      <AppointmentTable getAllReservations={getAllReservations} />
    </section>
  );
}

export default DoctorMainSection;
