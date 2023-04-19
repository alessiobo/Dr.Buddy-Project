import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
import PartClient from "./Pages/PartClient/PartClient";
import Navbar from "../src/Components/Navbar/Navbar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/bookingpage" element={<PartClient />} />
      </Routes>
    </div>
  );
}

export default App;
