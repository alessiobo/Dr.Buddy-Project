import DoctorMainSection from "../../Components/DoctorMainSection/DoctorMainSection";
import Footer from "../../Components/Footer/Footer";
import DoctorNavbar from "../../Components/Navbar/DoctorNavbar/DoctorNavbar";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/Table/AppointmentTable/AppointmentTable";
import TableResponsive from "../../Components/Table/TableResponsive";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import PageConteiner from "../../UI/Container/PageContainer/PageConteiner";

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
    <div>
      <Navbar />
      <PageConteiner>
        <DoctorNavbar />

        <DoctorMainSection
          getAllReservations={getAllReservations}
          updateReservation={updateReservation}
        />

        <aside>
          <UserLoginPic name={"Dr. Paperino"} personalImg={pap} />
        </aside>
      </PageConteiner>
      {/* <Footer /> */}
    </div>
  );
}

export default DoctorProfile;
