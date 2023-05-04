import TableResponsive from "../Table/TableResponsive";

type appuntamento = {
  ora: number;
  paziente: { nome: string; cognome: string };
  telefono: number;
};

const agenda: appuntamento[] = [
  { ora: 8, paziente: { nome: "Pippo", cognome: "Franco" }, telefono: 12345 },
  { ora: 9, paziente: { nome: "Pippo2", cognome: "Franco2" }, telefono: 12345 },
  {
    ora: 16,
    paziente: { nome: "Pippo3", cognome: "Franco3" },
    telefono: 12345,
  },
];

function Agenda() {
  return (
    <div>
      {/* <TableResponsive title={"Appuntamenti di oggi"} typeID={"ora"} /> */}
    </div>
  );
}

export default Agenda;
