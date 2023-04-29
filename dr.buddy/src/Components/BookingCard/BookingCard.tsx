import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";
import "./BookingCard.css";

// interface BookingCardProps {
//   onBook: (dateTime: Date) => void;
// }

// function BookingCard({ onBook }: BookingCardProps) {
function BookingCard({ createReservation }: { createReservation: any }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // function handleBookClick() {
  //   const dateTime = new Date(`${date}T${time}:00`);
  //   onBook(dateTime);
  // }

  const createReservatioHandler = (ev: any) => {
    ev.preventDefault();
    const reserv = {
      id_patient: 1, //per ora solo Mario
      data: date,
      ora: time,
      stato: "pending",
    };

    createReservation(reserv);
    setDate("");
    setTime("");
  };

  return (
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
              <Input
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </FormGroup>
            <div className="booking-btn">
              <Button
                className="custom-btn"
                size="sm"
                color="primary"
                onClick={createReservatioHandler}
              >
                Prenota
              </Button>
            </div>
          </Form>
        </div>
      </TableContainer>
    </div>
  );
}

export default BookingCard;
