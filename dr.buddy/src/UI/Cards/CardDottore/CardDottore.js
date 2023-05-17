import TableContainer from "../../Container/TableContainer/TableContainer";
import "./cardDottore.css";

import defaultPic from "./docPic.png";

function CardDottore({ doctor }) {
  return (
    <TableContainer>
      <section className="cardDoctor-container">
        <div>
          <img className="round" src={defaultPic} alt="user" />
          <h4>
            Nome: {doctor.firstname} {doctor.lastname}
          </h4>
          <h4>Email: {doctor.email}</h4>
          <p>Tel: {doctor.tel_num}</p>
        </div>
      </section>
    </TableContainer>
  );
}

export default CardDottore;
