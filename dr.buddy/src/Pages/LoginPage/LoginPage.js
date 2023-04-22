
import Footer from "../../Components/Footer/Footer"
import Login_card from "../../Components/Login_Card/Login_Card"
import Navbar from "../../Components/Navbar/Navbar"
import Register_Card from "../../Components/Register_Card/Register_Card"
import "./LoginPage.css"


function LoginPage() {
    return (
        <div className="LoginPage">
        <Navbar/>
        <div className="body" style={{ height: "530px" }}>
            <div className="body_element_container">
                <Login_card />  
                <Register_Card />
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default LoginPage