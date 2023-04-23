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
                 <Link to={"/loginpage"}><button><img src={calendar} alt="calendar"></img>Book an appointment</button></Link>
            </div>
        </div>
    )
}

export default Navbar