import RegisterCard from "../../Components/Register_Card/RegisterCard";
import Footer from "../../Components/Footer/Footer";
import "./RegisterPage.css";
function LoginPage({ createPatient }) {
  return (
    <div className="RegisterPage">
      <RegisterCard createPatient={createPatient} />

      <Footer />
    </div>
  );
}

export default LoginPage;
