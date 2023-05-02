
import Footer from "../../Components/Footer/Footer"
import Login_card from "../../Components/Login_Card/Login_Card"
import Navbar from "../../Components/Navbar/Navbar"
import "./RegisterPage.css"
import dottore from "./dottore.svg"

function LoginPage() {
    return (
        <div className="LoginPage">
        <Navbar/>
        <div className="body" style={{ height: "530px" }}>
            <div className="body_element_container">
                <Login_card/>
                <img src={dottore}/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default LoginPage