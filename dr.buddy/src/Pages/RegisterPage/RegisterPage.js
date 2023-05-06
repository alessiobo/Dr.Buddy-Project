import Navbar from "../../Components/Navbar/Navbar"
import RegisterCard from "../../Components/Register_Card/RegisterCard"
import Footer from "../../Components/Footer/Footer"
import "./RegisterPage.css"
function LoginPage({createPatient}) {
    return (
        <div className="RegisterPage" >
            <Navbar/>

            <RegisterCard createPatient={createPatient}/>

            <Footer/>
        </div>
    )
}

export default LoginPage