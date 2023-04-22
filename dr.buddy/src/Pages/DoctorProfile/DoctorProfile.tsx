import Agenda from "../../Components/Agenda/Agenda";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import TableResponsive from "../../Components/Table/TableResponsive";
import UserLoginPic from "../../Components/UserLoginPic/UserLoginPic";

//CD PLACEHOLDER
type prenotazione = {
  ora: number;
  paziente: { nome: string; cognome: string };
  telefono: number;
  data: string;
};

const prenotazioni: prenotazione[] = [
  {
    ora: 11,
    paziente: { nome: "Pluto", cognome: "Rossi" },
    telefono: 12345,
    data: "22/04/2024",
  },
  {
    ora: 12,
    paziente: { nome: "Pluto2", cognome: "Rossi2" },
    telefono: 12345,
    data: "23/05/2024",
  },
  {
    ora: 18,
    paziente: { nome: "Pluto3", cognome: "Rossi3" },
    telefono: 12345,
    data: "23/05/2024",
  },
];

function DoctorProfile() {
  return (
    <>
      <Navbar />
      <section style={{ padding: "40px" }}>
        <div>
          <UserLoginPic name={"Paperino"} />
        </div>
        <Agenda />
        <TableResponsive
          title="Nuove Prenotazioni"
          placeholderJSON={prenotazioni}
          buttons={true}
        />
      </section>
      <Footer />
    </>
  );
}

export default DoctorProfile;
