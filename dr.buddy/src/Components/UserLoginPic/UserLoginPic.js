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
  }, [getOnePatient]);

  return (
    <div className="doctorProfileTable-cont">
      <TableContainer>
        <div className="card-container-user">
          <img className="round" src={defaultPic} alt="user" />
          <h2>
            {pat?.firstname} {pat.lastname}
          </h2>
        </div>
      </TableContainer>
    </div>
  );
}

export default UserLoginPic;
