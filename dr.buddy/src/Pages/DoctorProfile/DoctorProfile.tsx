import Agenda from "../../Components/Agenda/Agenda";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/Table/AppointmentTable/AppointmentTable";
import TableResponsive from "../../Components/Table/TableResponsive";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";

//@ts-ignore
import pap from "./paperino.png";

function DoctorProfile({
  getAllReservations,
  updateReservation,
}: {
  getAllReservations: any;
  updateReservation: any;
}) {
  return (
    <>
      <Navbar />
      <section style={{ padding: "40px", backgroundColor: "#b0c5ff" }}>
        <div>
          <UserLoginPic name={"Dr. Paperino"} personalImg={pap} />
        </div>
        <Agenda />
        <TableResponsive
          title="Nuove Prenotazioni"
          buttons={true}
          getAllReservations={getAllReservations}
          updateReservation={updateReservation}
        />
        {/* <AppointmentTable getAllReservations={getAllReservations} /> */}
      </section>
      <Footer />
    </>
  );
}

export default DoctorProfile;
