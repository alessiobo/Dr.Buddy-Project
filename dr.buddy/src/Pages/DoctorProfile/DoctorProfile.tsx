import Agenda from "../../Components/Agenda/Agenda";
import TableResponsive from "../../Components/Table/TableResponsive";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";

function DoctorProfile() {
  return (
    <section style={{ padding: "40px" }}>
      <div>
        <UserLoginPic name={"Dr.Paperino"} />
      </div>
      <Agenda />
      <TableResponsive title="Nuove Prenotazioni" />
    </section>
  );
}

export default DoctorProfile;
