import useServer from "../../../Hooks/useServer";
import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
import "./doctorProfileTable.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import paperino from "./paperino.png";

function DoctorProfileTable({ id }) {
  const { getOneObj } = useServer("doctors");

  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      setData(await getOneObj(id));
    }
    getData();
  }, []);

  return (
    <div className="doctorProfileTable-cont">
      <TableContainer>
        <h3>Profilo:</h3>

        <div class="card-container">
          <img class="round" src={paperino} alt="user" />
          {data === undefined || data === null ? (
            <div>Loading...</div>
          ) : (
            <h5>
              {data.firstname} {data.lastname}
            </h5>
          )}
          <h4>New York</h4>
          <p>Dottore</p>
        </div>
        <span></span>
      </TableContainer>
    </div>
  );
}

export default DoctorProfileTable;
