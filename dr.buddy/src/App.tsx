import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
import PartClient from "./Pages/PartClient/PartClient";
import Navbar from "../src/Components/Navbar/Navbar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Footer from "./Components/Footer/Footer";
import useServer from "./Hooks/useServer";

function App() {
  const {
    data: getAllPatients,
    error: errorPatients,
    getOneObj: getOnePatient,
    createObj: createPatient,
    updateObj: updatePatient,
    deleteObj: deletePatient,
  } = useServer("patients");
  const {
    data: getAllReservations,
    error: errorReservations,
    getOneObj: getOneReservation,
    createObj: createReservation,
    updateObj: updateReservation,
    deleteObj: deleteReservation,
    getAllReservationByID,
  } = useServer("reservations");

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/doctor/profile"
          element={<DoctorProfile getAllReservations={getAllReservations} />}
        />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route
          path="/bookingpage"
          element={
            <PartClient
              createReservation={createReservation}
              getAllReservationByID={getAllReservationByID}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
