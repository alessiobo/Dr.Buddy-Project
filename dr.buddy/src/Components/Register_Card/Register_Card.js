import {useState} from "react"
import "./register_card.css"
import { Link } from "react-router-dom"
function Register_Card() {
    return (
        <div className="register_card">
            <div className="register_card_header">
                <button>Register</button>
            </div>
            <div className="register_card_body">
                <h2>Username</h2>
                <input type="text" placeholder="Username" />
                <h2>password</h2>
                <input type="password" placeholder="password" />
                <h2>email</h2>
                <input type="email" placeholder="email"/>
                <div className="register_button_wrapper">
                <button className="register_button">Register</button>
                </div>  
            </div>
        </div>
    )
}
export default Register_Card