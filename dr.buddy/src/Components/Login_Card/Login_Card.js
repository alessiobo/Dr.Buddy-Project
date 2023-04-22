
import "./Login_Card.css"


function Login_card() {
    return (
        <div className="login_card">
            <button className="Login_title">Login</button>
            <div className="login_card_content_wrapper">
                <h2 className="porcodio">Username</h2>
                <input type="text" placeholder="Username" />
                <h2>Password</h2>
                <input type="password" placeholder="Password" />
                <div className="login_button_wrapper">
                <button className="login_button">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login_card