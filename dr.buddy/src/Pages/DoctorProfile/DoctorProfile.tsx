import DoctorMainSection from "../../Components/DoctorMainSection/DoctorMainSection";
import { useState } from "react";
import DoctorNavbar from "../../Components/Navbar/DoctorNavbar/DoctorNavbar";
import PageConteiner from "../../UI/Container/PageContainer/PageConteiner";

//@ts-ignore

import DoctorProfileTable from "../../Components/DoctorPageComponents/DoctorProfileTable/DoctorProfileTable";

function DoctorProfile() {
  const [showMainComp, setMainComp] = useState({
    reservations: true,
  });

  return (
    <div>
      {/* <Navbar /> */}
      <PageConteiner>
        <DoctorNavbar setMainComp={setMainComp} />

        <DoctorMainSection showMainComp={showMainComp} />

        <DoctorProfileTable />
      </PageConteiner>
    </div>
  );
}

export default DoctorProfile;
