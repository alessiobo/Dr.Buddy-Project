
import "./Login_Card.css"
import { useState } from "react";

function Login_card() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login_card">
            <div className="login_card_content_wrapper">
                <h2>Email</h2>
                <input type="text" placeholder="Email"  value={email} onChange={(event) => setEmail(event.target.value)}/>
                <h2>Password</h2>
                <input type="password" placeholder="Password"  value={password} onChange={(event) => setPassword(event.target.value)}/>
                <div className="login_button_wrapper">
                <button className="login_button">Accedi</button>
                </div>
            </div>
        </div>
    )
}
export default Login_card