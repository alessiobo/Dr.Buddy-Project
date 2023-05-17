import Footer from "../../Components/Footer/Footer";
import LoginCard from "../../Components/Login_Card/Login_Card";
import Navbar from "../../Components/Navbar/Navbar";
// import "./LoginPage.css"


function LoginPage({ loginDoctor, loginPatient }) {
  return (
    <div className="LoginPage" style={{ backgroundColor: "#396CCD" }}>
      <Navbar showButton="true" />
      <LoginCard loginDoctor={loginDoctor} loginPatient={loginPatient} />
      <Footer />
    </div>
  );
}

export default LoginPage;
