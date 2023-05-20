import "./LoginCard.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login_card({
  loginDoctor,
  loginPatient,
  setIsLogin,
  setIsPatient,
  isPatient,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);

  const navigate = useNavigate();

  async function HandleData(ev) {
    ev.preventDefault();
    const inputData = {
      firstname: email, //cambiare email
      password: password,
    };
    if (isDoctor) {
      loginDoctor(inputData);
    } else {
      loginPatient(inputData);
    }
    if (Cookies.get("token") !== undefined) {
      isDoctor ? navigate("/doctor/profile") : navigate("/bookingpage");
      setIsLogin(true);
    }
    console.log(Cookies.get("token"));
  }
  return (
    <div className="LoginCard">
      <div class="shape"></div>
      <form>
        <h3>Accedi qui</h3>

        <label for="username">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          id="username"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="doctor_checkbox_wrapper">
          <label for="doctor_checkbox">Sei un dottore?</label>
          <input
            id="doctor_checkbox"
            type="checkbox"
            checked={isDoctor}
            onChange={() => {
              setIsDoctor(!isDoctor);
              setIsPatient(!isPatient);
            }}
          ></input>
        </div>
        <label>
          Prima volta su Dr.Buddy?{" "}
          <Link to="/register">
            <span className="clicca_qui">Clicca qui</span>
          </Link>
        </label>
        <button onClick={HandleData}>Accedi</button>
      </form>
      <div class="shape"></div>
    </div>
  );
}
export default Login_card;
