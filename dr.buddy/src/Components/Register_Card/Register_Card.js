import {useState} from "react"
import "./register_card.css"
import { Link } from "react-router-dom"
function Register_Card() {
    const [index, setIndex] = useState(0)
    function changeIndex() {
        setIndex((index) => index + 1)
    }
    return (
        <div className={index ? "card_button_wrapper animate_right" : "card_button_wrapper"}>
                <button id="register_top_button" onClick={changeIndex}>Register</button>
            <div className=" card register_card">
                <h2>Username</h2>
                <input type="text"></input>
                <h2>Password</h2>
                <input type="password"></input>
                <h3>Prima volta su DrBuddy? <Link className="link">Registrati</Link></h3>
                <div className="btn_wrapper"><button className="btn_custom">Accedi</button></div>
            </div>
        </div>
    )
}
export default Register_Card