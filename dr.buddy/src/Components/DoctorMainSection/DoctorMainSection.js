import AppointmentTable from "../Table/AppointmentTable/AppointmentTable";
import TableCardsReservations from "../Table/TableCardsReservations/TableCardsReservations";

import "./doctorMainSection.css";

function DoctorMainSection({ updateReservation, getAllReservations }) {
  return (
    <section className="doctorMainSection-cont">
      <TableCardsReservations getAllReservations={getAllReservations} />

      <AppointmentTable getAllReservations={getAllReservations} />
    </section>
  );
}

export default DoctorMainSection;
