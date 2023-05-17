import "./userLoginPic.css";
import { useEffect, useState } from "react";

//@ts-ignore
import defaultPic from "./circle-user.svg";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";

function UserLoginPic({ getOnePatient }) {
  const [pat, setPat] = useState({});

  useEffect(() => {
    async function getPatient() {
      const pat = await getOnePatient(1);
      setPat(pat);
    }

    getPatient();
  }, []);

  return (
    <div className="doctorProfileTable-cont">
      <TableContainer>
        <h3>Profilo:</h3>
        <div className="card-container">
          <img className="round" src={defaultPic} alt="user" />
          <h4>
            {pat?.firstname} {pat.lastname}
          </h4>
          <h4>Email: {pat.email}</h4>
          <p>Tel: {pat.tel_num}</p>
        </div>
        <span></span>
      </TableContainer>
    </div>
  );
}

export default UserLoginPic;
