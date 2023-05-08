import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./doctorProfileTable.css";

import paperino from "./paperino.png";

function DoctorProfileTable() {
  return (
    <div className="doctorProfileTable-cont">
      <TableContainer>
        <h3>Profilo:</h3>

        <div class="card-container">
          <img class="round" src={paperino} alt="user" />
          <h4>Paolino Paperino</h4>
          <h4>New York</h4>
          <p>Dottore</p>
        </div>
        <span></span>
      </TableContainer>
    </div>
  );
}

export default DoctorProfileTable;
