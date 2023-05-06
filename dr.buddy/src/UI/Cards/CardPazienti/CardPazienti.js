import "../CardPrenotazione/cardPrenotazione.css";

function CardPazienti({
  id = "ID",
  paziente = "Paziente",
  email = "Email",
  tel_num = "Tel",
}) {
  return (
    <div className="cardPrenotazione-cont">
      <h4>{id}</h4>
      <h4>{paziente}</h4>
      <h4>{email}</h4>
      <h4>{tel_num}</h4>
    </div>
  );
}

export default CardPazienti;
