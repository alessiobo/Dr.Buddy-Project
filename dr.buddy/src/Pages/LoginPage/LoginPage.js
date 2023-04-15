
import Login_card from "../../Login_Card/Login_Card"
import Register_Card from "../../Register_Card/Register_Card"
import "./LoginPage.css"


function LoginPage() {
    return (
        <div className="body" style={{ height: "530px" }}>
            <div className="body_element_container">
                <Login_card />  
                <Register_Card />
            </div>
        </div>
    )
}

export default LoginPage