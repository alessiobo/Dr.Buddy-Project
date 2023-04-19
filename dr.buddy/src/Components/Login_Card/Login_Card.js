
import "./Login_Card.css"
import { Link } from "react-router-dom"
import { useState } from "react"
function Login_card() {
    const [index, setIndex] = useState(0)
    function changeIndex() {
        setIndex((index) => index + 1)
    }
    return (
        <div className={index ? "card_button_wrapper animate_left" : "card_button_wrapper"}>
            <button id="login_top_button" onClick={changeIndex} >Login</button>
            <div className="card login_card custom" >
                <h2 className="h2 custom">Username</h2>
                <input type="text" className="input custom"></input>
                <h2 className="h2 custom">Password</h2>
                <input type="password" className="input custom"></input>
                <h3 className="h3 custom">Prima volta su DrBuddy? <Link className="link custom">Registrati</Link></h3>
                <div className="btn_wrapper custom"><button className="btn custom">Accedi</button></div>
            </div>
        </div>
    )
}
export default Login_card