import React from "react";
import "./Navbar.css"
import logo_white from "./img/logo_white.png"
import { Link } from "react-router-dom";
function Navbar({showButton = true}) {

    return (
        <div className="navbar">
            <div className="logo_wrapper">
                <Link to="/">
                    <img src={logo_white} alt="logo_white" className="logo_white" />
                </Link>
            </div>
            <div className="link_container">
                <div>
                    Chi siamo
                </div>
                <div>
                    Come funziona
                </div>
                <div>
                <Link to="/contacts">
                    Contatti
                    </Link>
                </div>
            </div>
            {showButton ? <div className="button_wrapper">
                
                <Link to="/login">
                    <button type="button" className="navbar_login_button">Accedi</button>
                </Link>
                <Link to="/register">
                    <button type="button" className="navbar_register_button">Registrati</button>
                </Link>
            </div> : <div></div> }
        </div>
    )
}

export default Navbar