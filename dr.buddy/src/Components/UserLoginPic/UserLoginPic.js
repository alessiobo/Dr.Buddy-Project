import "./userLoginPic.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
//@ts-ignore
import defaultPic from "./circle-user.svg";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";

function UserLoginPic({ getOnePatient, force }) {
  const [data, setData] = useState(null);
  const id = Cookies.get("id");

  useEffect(() => {
    async function getData() {
      setData(await getOnePatient(id));
    }
    getData();
  }, []);

  return (
    <div className="doctorProfileTable-cont">
      <TableContainer>
        <input style={{ display: "none" }} value={force} />
        <div className="card-container-user">
          <img className="round" src={defaultPic} alt="user" />
          {data === undefined || data === null ? (
            <div>Loading...</div>
          ) : (
            <h5>
              {data.firstname} {data.lastname}
            </h5>
          )}
        </div>
      </TableContainer>
    </div>
  );
}

export default UserLoginPic;
