import React from "react";
import "./Navbar.css"
import logo_white from "./img/logo_white.png"
import calendar from "./img/calendar.svg"
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo_wrapper">
                <img src={logo_white} alt="logo_white"/>
            </div>
            <div className="link_container">
                <div>
                Prices
                </div>
                <div>
                    How it works
                </div>
                <div>
                    Contacts
                </div>
            </div>
            <div className="button_wrapper">
                <button><img src={calendar} alt="calendar"></img>Book an appointment</button>
            </div>
        </div>
    )
}

export default Navbar