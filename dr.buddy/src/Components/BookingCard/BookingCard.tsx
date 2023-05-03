import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"; 
import TableContainer from "../../UI/Container/TableContainer/TableContainer";
import "./BookingCard.css";

function BookingCard({ createReservation }: { createReservation: any }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isBookingVisible, setIsBookingVisible] = useState(false);

  const createReservationHandler = (ev: any) => {
    ev.preventDefault();
    const reserv = {
      id_patient: 1, //per ora solo Mario
      data: date,
      ora: time,
      stato: "⏳",
    };

    createReservation(reserv);
    setDate("");
    setTime("");
  };

  function generateTimeOptions() {
    const options = [];

    for (let hour = 8; hour < 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;

        options.push(
          <option key={timeString} value={timeString}>
            {timeString}
          </option>
        );
      }
    }

    return options;
  }

  return (
    <div className="BookingCard">
      <div className="toggle-btn-wrapper">
        <Button
          className="toggle-btn"
          onClick={() => setIsBookingVisible(!isBookingVisible)}
        >
          {isBookingVisible ? "Nascondi prenotazione" : "Prenota visita"}
        </Button>
      </div>
      {isBookingVisible && (
        <div className="booked-card">
          <TableContainer>
            <h3 className="card-title" style={{ margin: "0" }}>
              Prenota ora la tua visita
            </h3>
            <div className="booking-card">
              <div className="card-body"></div>
              <Form className="form-style">
                <FormGroup>
                  <Label>Data</Label>
                  <Input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="time-label">Ora</Label>
                  {/* <Input
                    type="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                  /> */}
                  <select className="HourSelect"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                  >
                    <option value="" />
                    {generateTimeOptions()}
                  </select>
                </FormGroup>
                <div className="booking-btn">
                  <Button
                    className="custom-btn"
                    size="sm"
                    color="primary"
                    onClick={createReservationHandler}
                  >
                    Prenota
                  </Button>
                </div>
              </Form>
            </div>
          </TableContainer>
        </div>
      )}
    </div>
  );
}

export default BookingCard;
