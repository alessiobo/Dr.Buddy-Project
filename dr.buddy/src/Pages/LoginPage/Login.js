import Footer from "../../Components/Footer/Footer";
import LoginCard from "../../Components/Login_Card/Login_Card";

// import "./LoginPage.css"

function LoginPage({ setIsLogin, isLogin }) {
  return (
    <div className="LoginPage" style={{ backgroundColor: "#396CCD" }}>
      <LoginCard setIsLogin={setIsLogin} isLogin={isLogin} />
      <Footer />
    </div>
  );
}

export default LoginPage;
