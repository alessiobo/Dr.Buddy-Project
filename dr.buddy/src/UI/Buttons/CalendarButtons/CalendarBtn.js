import "./calendarBtn.css";
function CalendarBtn({ take }) {
  return (
    <button
      className="cal-btn-color"
      style={
        take ? { backgroundColor: "yellow" } : { backgroundColor: "green" }
      }
    >
      -
    </button>
  );
}

export default CalendarBtn;
