
import "./LoginCard.css"
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login_card() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function HandleData() {
        const inputData = {
            firstname: email,
            password: password,
        }
        
    }
    return (
        <div className="LoginCard">
            <div className="shape"></div>
            <form >
                <h3>Accedi qui</h3>

                <label htmlFor="username">Email</label>
                <input type="text" placeholder="Email" id="username" onChange={(event) => { setEmail(event.target.value) }} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" onChange={(event) => { setPassword(event.target.value) }} />
                <label>Prima volta su Dr.Buddy? <Link to="/register"><span className="clicca_qui">Clicca qui</span></Link></label>
                <button onClick={HandleData}>Accedi</button>
            </form>
            <div className="shape"></div>
        </div>



    )
}
export default Login_card