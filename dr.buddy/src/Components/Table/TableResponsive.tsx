// import Table from "react-bootstrap/esm/Table";
// import Button from "react-bootstrap/esm/Button";
import TableContainer from "../../UI/Container/TableContainer/TableContainer";
import { useEffect, useState } from "react";

type appuntamento = {
  id_reservation: number;
  id_patient: number;
  date_reservation: string;
  firstname: string;
  lastname: string;
};

function TableResponsive({
  title = "",
  buttons = false,
  getAllReservations,
  updateReservation,
}: {
  title?: string;
  buttons?: boolean;
  getAllReservations: any;
  updateReservation: any;
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await getAllReservations(1));
    }
    fetchData();
    console.log(data);
  }, [getAllReservations]);

  return (
    <TableContainer>
      <h3>{title}:</h3>
      <table
        style={{ backgroundColor: "#fbfaf8" }}
        className="table_responsive-cont"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>data</th>
            <th>paziente</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el: appuntamento) => {
              return (
                <tr key={el.id_reservation}>
                  <td>{el.id_reservation}</td>
                  <td>{el.date_reservation}</td>
                  <td>
                    {el.firstname} {el.lastname}
                  </td>
                  {/* <td>
                    {el.firstname} {el.lastname}
                  </td>
                  <td>{el.tel_num}</td>
                  <td>{el.email}</td>
                  <td>{el.date_reservation.split("-").reverse().join("/")}</td>
                  <td>{el.ora}</td>
                  <td>{el.stato}</td> */}

                  {/* {buttons && el.stato !== "✅" && el.stato !== "❌" && (
                    <div>
                      <td style={{ marginRight: "20px" }}>
                        <Button
                          variant="success"
                          onClick={() =>
                            updateReservation(el.id_reservation, {
                              stato: "✅",
                            })
                          }
                        >
                          👍
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() =>
                            updateReservation(el.id_reservation, {
                              stato: "❌",
                            })
                          }
                        >
                          🗙
                        </Button>
                      </td>
                    </div>
                  )} */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default TableResponsive;
