import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
import ContactsPage from "./Pages/Contacts/ContactsPage";
// import "bootstrap/dist/css/bootstrap.min.css";
import PartClient from "./Pages/PartClient/PartClient";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import useServer from "./Hooks/useServer";
import LoginPage from "./Pages/LoginPage/Login";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const { createObj: createPatient, logout: logoutPatient } =
    useServer("patients");
  const { logout: logoutDoctor } = useServer("doctors");

  const [isLogin, setIsLogin] = useState(false);
  // const [isPatient, setIsPatient] = useState(true);

  return (
    <div>
      <Navbar
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        logoutDoctor={logoutDoctor}
        logoutPatient={logoutPatient}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route
          path="/login"
          element={<LoginPage setIsLogin={setIsLogin} isLogin={isLogin} />}
        />
        <Route
          path="/register"
          element={<RegisterPage createPatient={createPatient} />}
        />
        <Route path="/bookingpage" element={<PartClient />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
