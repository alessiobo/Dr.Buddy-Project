import Agenda from "../../Components/Agenda/Agenda";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import TableResponsive from "../../Components/Table/TableResponsive";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";

//CD PLACEHOLDER

function DoctorProfile({ getAllReservations }: { getAllReservations: any }) {
  return (
    <>
      <Navbar />
      <section style={{ padding: "40px" }}>
        <div>
          <UserLoginPic name={"Paperino"} />
        </div>
        <Agenda />
        <TableResponsive
          title="Nuove Prenotazioni"
          buttons={false}
          getAllReservations={getAllReservations}
        />
      </section>
      <Footer />
    </>
  );
}

export default DoctorProfile;
