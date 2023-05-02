import React from "react";
import "./Navbar.css"
import logo_white from "./img/logo_white.png"
import calendar from "./img/calendar.svg"
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo_wrapper">
                <img src={logo_white} alt="logo_white" className="logo_white"/>
            </div>
            <div className="link_container">
                <div>
                Prezzi
                </div>
                <div>
                    Come funziona
                </div>
                <div>
                    Contatti
                </div>
            </div>
            {/* <div className="button_">
                <button type="button" className="
            </div> */}
        </div>
    )
}

export default Navbar