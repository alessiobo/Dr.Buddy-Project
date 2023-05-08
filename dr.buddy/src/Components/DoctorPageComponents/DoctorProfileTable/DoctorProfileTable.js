import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import UserLoginPic from "../../UserLoginPic/UserLoginPic";
import "./doctorProfileTable.css";

function DoctorProfileTable() {
  return (
    <div className="doctorProfileTable-cont">
      <TableContainer>
        <h3>Dottore:</h3>
        {/* <UserLoginPic name={"Dr. Paperino"} /> */}
        <span></span>
      </TableContainer>
    </div>
  );
}

export default DoctorProfileTable;
