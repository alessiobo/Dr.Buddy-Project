import TableContainer from "../../Container/TableContainer/TableContainer";
import "./cardDottore.css";
import defaultPic from "./docPic.png";
import person_white from "./icons/person_white.jpg"
import phone_white from "./icons/phone_icon.jpg"
import email_icon from "./icons/email_icon.jpg"
function CardDottore({ doctor }) {
  return (
      <div className="cardCoDottore">
        <div className="imgCoDottore">
          <img alt="Immagine Profilo" src={defaultPic} />
        </div>
        <div className="textCo">
          <div className="icon_text_wrapper">
            <img className="person_icon" src={person_white} /><h2>Dr.{doctor.firstname} {doctor.lastname}</h2>
          </div>
          {/* da valutare per scelta stilistica */}
          <div className="icon_text_wrapper">
            <img className="num_icon" src={phone_white} /><h3>{doctor.tel_num}</h3>
          </div>
          <div className="icon_text_wrapper"><img className="email_icon" src={email_icon} /><h3>{doctor.email}</h3></div>
        </div>
      </div>
  );  
}

export default CardDottore;
