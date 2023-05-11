import "./userLoginPic.css";

//@ts-ignore
import defaultPic from "./circle-user.svg";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";

function UserLoginPic({
  name = "",
  personalImg,
}: {
  name: string;
  personalImg?: any;
}) {
  return (
    <div className="doctorProfileTable-cont">
      <TableContainer>
        <h3>Profilo:</h3>

        <div className="card-container">
          <img className="round" src={defaultPic} alt="user" />
          <h4>Pippo Esposito</h4>
          <h4>Napoli</h4>
          <p>Paziente</p>
        </div>
        <span></span>
      </TableContainer>
    </div>
  );
}

export default UserLoginPic;
