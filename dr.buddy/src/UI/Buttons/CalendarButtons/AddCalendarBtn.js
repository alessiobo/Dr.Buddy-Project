function AddCalendarBtn({ createReservation, date }) {
  return (
    <button
      onClick={() =>
        createReservation({
          id_doctor: 1,
          date_reservation: date,
        })
      }
      className="cal-btn-color"
      style={{ backgroundColor: "#ffa5004a" }}
    >
      +
    </button>
  );
}

export default AddCalendarBtn;
