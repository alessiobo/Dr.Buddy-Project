import { useState } from "react";
import "./RegisterCard.css";
// import LabelTextInput from "../LabelTextInput/LabelTextInput"
import { Link } from "react-router-dom";

function Register_Card({ createPatient }) {
  const [dataRegister, setDataRegister] = useState({
    firstname: "",
    lastname: "",
    tel_num: "",
    email: "",
    password: "",
    showtext: false,
  });

  async function createPatientHandler(event) {
    event.preventDefault();
    await createPatient(dataRegister);
  }

  return (
    <div className="RegisterCard">
      <div class="shape"></div>
      <form>
        <h3>Registrati</h3>
        <label for="firstname">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          id="firstname"
          onChange={(event) => {
            setDataRegister({ ...dataRegister, firstname: event.target.value });
          }}
        />
        <label for="lastname">Cognome</label>
        <input
          type="text"
          placeholder="Cognome"
          id="lastname"
          onChange={(event) => {
            setDataRegister({ ...dataRegister, lastname: event.target.value });
          }}
        />
        <label for="tel_num">Numero di telefono</label>
        <input
          type="text"
          placeholder="+39"
          id="tel_num"
          maxLength={10}
          onChange={(event) => {
            setDataRegister({ ...dataRegister, tel_num: event.target.value });
          }}
        />
        <label for="Email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="Email"
          onChange={(event) => {
            setDataRegister({ ...dataRegister, email: event.target.value });
          }}
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder=""
          id="password"
          onChange={(event) => {
            setDataRegister({ ...dataRegister, password: event.target.value });
          }}
        />
        <label>
          Sei già registrato?{" "}
          <Link to="/login">
            <span className="clicca_qui">Clicca qui</span>
          </Link>
        </label>
        <button onClick={createPatientHandler}>Registrati</button>
      </form>
      <div class="shape"></div>
    </div>
  );
}
export default Register_Card;
