
import "./Login_Card.css"
import { Link } from "react-router-dom"
import {useState} from "react"
function Login_card() {
    const [index, setIndex] = useState(0)
    function changeIndex() {
        setIndex((index) => index + 1)
    }
    return (
        <div className={index ? "card_button_wrapper animate_left" : "card_button_wrapper"}>
                <button id="login_top_button" onClick={changeIndex} >Login</button>
            <div className="card login_card" >
                <h2>Username</h2>
                <input type="text"></input>
                <h2>Password</h2>
                <input type="password"></input>
                <h3>Prima volta su DrBuddy? <Link className="link">Registrati</Link></h3>
                <div className="btn_wrapper"><button className="btn">Accedi</button></div>
            </div>
        </div>
    )
}
export default Login_card