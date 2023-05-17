import "./userLoginPic.css";
import { useState, useEffect } from "react";
//@ts-ignore
import defaultPic from "./circle-user.svg";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";

function UserLoginPic({getOnePatient}) {
  const [patient, setPatient] = useState({})

  useEffect(() => {
    async function getPatient() {
      const patient1 = await getOnePatient(1);
      setPatient(patient1)
    } getPatient()
  }, [])
 
  

  return (
    <div className="doctorProfileTable-cont">
      <TableContainer>
        <h3>Profilo:</h3>
        <div className="card-container">
          <img className="round" src={defaultPic} alt="user" />
          <h4>{patient?.firstname}</h4>
          <h4>Napoli</h4>
          <p>Paziente</p>
        </div>
        <span></span>
      </TableContainer>
    </div>
  );
}

export default UserLoginPic;
