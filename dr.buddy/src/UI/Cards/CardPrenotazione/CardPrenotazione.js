import "./cardPrenotazione.css";

function CardPrenotazione({
  id = "ID",
  doc = false,
  paziente = doc ? "Dottore" : "Paziente",
  data = "Data",
  ora = "Ora",
  updateReservation,
}) {
  return (
    <div className="cardPrenotazione-cont">
      <h4>{id}</h4>
      <h4>{paziente}</h4>
      <h4>{data}</h4>
      <h4>{ora}</h4>
      {updateReservation && (
        <button
          className="btn_removePrenotation"
          onClick={() => updateReservation(id, { id_patient: null })}
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default CardPrenotazione;
