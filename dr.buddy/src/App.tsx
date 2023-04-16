import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/Components/Navbar/Navbar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
