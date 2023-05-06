import DoctorMainSection from "../../Components/DoctorMainSection/DoctorMainSection";
import Footer from "../../Components/Footer/Footer";
import DoctorNavbar from "../../Components/Navbar/DoctorNavbar/DoctorNavbar";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/Table/AppointmentTable/AppointmentTable";
import TableResponsive from "../../Components/Table/TableResponsive";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";
import PageConteiner from "../../UI/Container/PageContainer/PageConteiner";
import { useEffect, useState } from "react";

//@ts-ignore
import pap from "./paperino.png";

function DoctorProfile({
  getAllReservations,
  updateReservation,
  getAllPatients,
  getAllReservationByDoctorID,
}: {
  getAllReservations: any;
  updateReservation: any;
  getAllPatients: any;
  getAllReservationByDoctorID: any;
}) {
  const [showMainComp, setMainComp] = useState({
    reservations: true,
    patients: false,
    calendar: false,
    settings: false,
  });
  return (
    <div>
      <Navbar />
      <PageConteiner>
        <DoctorNavbar setMainComp={setMainComp} />

        <DoctorMainSection
          getAllReservations={getAllReservations}
          updateReservation={updateReservation}
          getAllPatients={getAllPatients}
          showMainComp={showMainComp}
          getAllReservationByDoctorID={getAllReservationByDoctorID}
        />

        <UserLoginPic name={"Dr. Paperino"} personalImg={pap} />
      </PageConteiner>
      {/* <Footer /> */}
    </div>
  );
}

export default DoctorProfile;
