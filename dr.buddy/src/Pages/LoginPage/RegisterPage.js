
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import Register_Card from "../../Components/Register_Card/Register_Card"
import "./RegisterPage.css"
import dottoressa from "./dottoressa.svg"

function LoginPage({createPatient}) {
    return (
        <div className="LoginPage">
        <Navbar/>
        <div className="body" style={{ height: "530px" }}>
            <div className="body_element_container">
                <Register_Card createPatient={createPatient} />
                <img src={dottoressa}/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default LoginPage