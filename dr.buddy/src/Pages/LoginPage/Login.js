import Footer from "../../Components/Footer/Footer";
import LoginCard from "../../Components/Login_Card/Login_Card";
import Navbar from "../../Components/Navbar/Navbar";
// import "./LoginPage.css"

function LoginPage({
  loginDoctor,
  loginPatient,
  setIsLogin,
  setIsPatient,
  isPatient,
}) {
  return (
    <div className="LoginPage" style={{ backgroundColor: "#396CCD" }}>
      {/* <Navbar showButton="true" /> */}
      <LoginCard
        loginDoctor={loginDoctor}
        loginPatient={loginPatient}
        setIsLogin={setIsLogin}
        setIsPatient={setIsPatient}
        isPatient={isPatient}
      />
      <Footer />
    </div>
  );
}

export default LoginPage;
