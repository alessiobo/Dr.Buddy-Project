import React from "react";
import Cookies from "js-cookie";
import "./Navbar.css";
import logo_white from "./img/logo_white.png";
import { Link } from "react-router-dom";
function Navbar({ isLogin, setIsLogin, logoutPatient, logoutDoctor }) {
  const id = Cookies.get("id");

  //Logout btn

  return (
    <div className="navbar">
      <div className="logo_wrapper">
        <Link to="/">
          <img src={logo_white} alt="logo_white" className="logo_white" />
        </Link>
      </div>
      <div className="link_container">
        <div>Chi siamo</div>
        <div>Come funziona</div>
        <div>
          <Link to="/contacts">Contatti</Link>
        </div>
      </div>
      {!isLogin ? (
        <div className="button_wrapper">
          <Link to="/login">
            <button type="button" className="navbar_login_button">
              Accedi
            </button>
          </Link>
          <Link to="/register">
            <button type="button" className="navbar_register_button">
              Registrati
            </button>
          </Link>
        </div>
      ) : (
        <div className="button_wrapper">
          <Link to="/">
            <button
              onClick={() => {
                logoutDoctor(id);
                logoutPatient(id);
                setIsLogin(!isLogin);
              }}
              type="button"
              className="navbar_login_button"
            >
              Logout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
