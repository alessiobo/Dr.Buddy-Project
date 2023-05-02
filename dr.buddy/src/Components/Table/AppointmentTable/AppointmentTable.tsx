import "./appointmentTable.css";

type appuntamento = {
  id_reservation: number;
  firstname: string;
  lastname: string;
  email: string;
  tel_num: string;
  ora: string;
  date_reservation: string;
  stato: string;
};

import i_phone from "./icon/i_phone.svg";

function AppointmentTable({ getAllReservations }: { getAllReservations: any }) {
  const today = new Date();
  const todayString = today.toISOString().substring(0, 10);

  const todayApp =
    getAllReservations &&
    getAllReservations.filter((app: appuntamento) => {
      return app.date_reservation === todayString;
    });

  return (
    <table className="appTable-cont">
      <thead>
        <th style={{ width: "20%" }}></th>
        <th></th>
      </thead>
      <tbody>
        <tr>
          <td>8 AM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "08:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      <span>
                        {app.firstname} {app.lastname}
                      </span>
                      <span>
                        {i_phone}
                        {app.tel_num}
                      </span>
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>9 AM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "09:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      <span>
                        {app.firstname} {app.lastname}
                      </span>
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>10 AM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "10:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      <span>
                        {app.firstname} {app.lastname}
                      </span>
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>11 AM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "11:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      {app.firstname} {app.lastname}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>12 AM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "12:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      {app.firstname} {app.lastname}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>2 PM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "14:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      {app.firstname} {app.lastname}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>3 PM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "15:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      {app.firstname} {app.lastname}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>4 PM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "16:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      {app.firstname} {app.lastname}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>5 PM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "17:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      {app.firstname} {app.lastname}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>6 PM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "18:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      {app.firstname} {app.lastname}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>7 PM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "19:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      {app.firstname} {app.lastname}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
        <tr>
          <td>8 PM</td>
          {todayApp &&
            todayApp.map((app: appuntamento) => {
              if (app.ora === "20:00") {
                return (
                  <td key={app.id_reservation}>
                    <div className="appTable-tdCont">
                      {app.firstname} {app.lastname}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
      </tbody>
    </table>
  );
}

export default AppointmentTable;
