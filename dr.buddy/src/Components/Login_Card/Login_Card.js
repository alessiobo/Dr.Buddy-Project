import "./LoginCard.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useServer from "../../Hooks/useServer";

function Login_card({ setIsLogin, isLogin }) {
  const navigate = useNavigate();

  const { login: loginDoctor } = useServer("doctors");
  const { login: loginPatient } = useServer("patients");

  //FORM
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  //Alert
  const [alert, setAlert] = useState("none");

  useEffect(() => {
    if (alert === "block") {
      setTimeout(() => {
        setAlert("none");
      }, 2000);
    }
  }, [alert]);

  function loginHandler(ev) {
    ev.preventDefault();

    if (email !== "" && password !== "") {
      if (isDoctor) {
        loginDoctor({ firstname: email, password })
          .then((res) => {
            if (Cookies.get("token") !== "undefined") {
              console.log(Cookies.get("token"));
              navigate("/doctor/profile");
              setIsLogin(!isLogin);
            } else {
              setAlert("block");
            }
          })
          .catch((err) => console.log("401 non puoi entrare"));
      } else {
        loginPatient({ firstname: email, password })
          .then((res) => {
            if (Cookies.get("token") !== "undefined") {
              console.log(Cookies.get("token"));
              navigate("/bookingpage");
              setIsLogin(!isLogin);
            } else {
              setAlert("block");
            }
          })
          .catch((err) => console.log(err));
      }
    } else {
      setAlert("block");
    }
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
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
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
            }}
          ></input>
        </div>
        <label>
          Prima volta su Dr.Buddy?
          <Link to="/register">
            <span className="clicca_qui">Clicca qui</span>
          </Link>
        </label>
        <alert
          style={{
            display: alert,
            marginTop: "40px",
            background: "red",
            padding: "2%",
          }}
        >
          Email or password incorrect!
        </alert>
        <button
          style={alert === "block" ? { display: "none" } : { display: "block" }}
          type="submit"
          onClick={loginHandler}
        >
          Accedi
        </button>
      </form>
      <div class="shape"></div>
    </div>
  );
}
export default Login_card;
