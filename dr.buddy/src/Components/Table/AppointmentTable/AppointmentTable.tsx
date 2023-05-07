import TableContainer from "../../../UI/Container/TableContainer/TableContainer";
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

function AppointmentTable({ getAllReservations }: { getAllReservations: any }) {
  // const today = new Date();
  // const todayString = today.toISOString().substring(0, 10);

  // const todayApp =
  //   getAllReservations &&
  //   getAllReservations.filter((app: appuntamento) => {
  //     return app.date_reservation === todayString;
  //   });

  return (
    <TableContainer>
      <h3>Appuntamenti di oggi:</h3>
      <section className="appTable-cont">
        <table className="appTable-table">
          <thead>
            <tr style={{ width: "20%" }}></tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>8 AM</td>
              {todayApp &&
                todayApp.map((app: appuntamento) => {
                  if (app.ora === "08:00") {
                    return (
                      <td key={app.id_reservation}>
                        <div className="appTable-tdCont">
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "08:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "09:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "10:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "11:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "12:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "14:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "15:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "16:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "17:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "18:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  } else {
                    if (app.ora === "19:30") {
                      return (
                        <td key={app.id_reservation}>
                          <div className="appTable-tdCont">
                            <span>🕑{app.ora}</span>
                            <span>
                              👤{app.firstname} {app.lastname}
                            </span>
                            <span>☎️: {app.tel_num}</span>
                          </div>
                        </td>
                      );
                    }
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
                          <span>🕑{app.ora}</span>
                          <span>
                            👤{app.firstname} {app.lastname}
                          </span>
                          <span>☎️: {app.tel_num}</span>
                        </div>
                      </td>
                    );
                  }
                })} */}
            </tr>
          </tbody>
        </table>
      </section>
    </TableContainer>
  );
}

export default AppointmentTable;
