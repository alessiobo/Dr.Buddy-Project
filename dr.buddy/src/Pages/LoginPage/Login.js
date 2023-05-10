
import Footer from "../../Components/Footer/Footer"
import LoginCard from "../../Components/Login_Card/Login_Card"
import Navbar from "../../Components/Navbar/Navbar"
// import "./LoginPage.css"
import dottore from "./dottore.svg"

function LoginPage() {
    return (
        <div className="LoginPage" style={{backgroundColor : "#396CCD"}}>
            <Navbar />
                <LoginCard/>
            <Footer />
        </div>



    )
}

export default LoginPage