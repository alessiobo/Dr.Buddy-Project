import DoctorMainSection from "../../Components/DoctorMainSection/DoctorMainSection";
import { useState } from "react";
import DoctorNavbar from "../../Components/Navbar/DoctorNavbar/DoctorNavbar";
import PageConteiner from "../../UI/Container/PageContainer/PageConteiner";
import Cookies from "js-cookie";

//@ts-ignore

import DoctorProfileTable from "../../Components/DoctorPageComponents/DoctorProfileTable/DoctorProfileTable";

function DoctorProfile() {
  const [showMainComp, setMainComp] = useState({
    reservations: true,
  });

  const id = Cookies.get("id");

  return (
    <div>
      {/* <Navbar /> */}
      <PageConteiner>
        <DoctorNavbar setMainComp={setMainComp} />

        <DoctorMainSection showMainComp={showMainComp} id={id} />

        <DoctorProfileTable id={id} />
      </PageConteiner>
    </div>
  );
}

export default DoctorProfile;
