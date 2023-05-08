import "./calendarBtn.css";
function CalendarBtn({ take, ora }) {
  return (
    <button
      className="cal-btn-color"
      style={
        take ? { backgroundColor: "#feecd4" } : { backgroundColor: "#d4f4fe" }
      }
    >
      {ora}
    </button>
  );
}

export default CalendarBtn;
