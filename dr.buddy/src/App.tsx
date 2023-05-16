import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
import ContactsPage from "./Pages/Contacts/ContactsPage"
// import "bootstrap/dist/css/bootstrap.min.css";
import PartClient from "./Pages/PartClient/PartClient";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import useServer from "./Hooks/useServer";
import LoginPage from "./Pages/LoginPage/Login"; 

function App() {
  
  const {
    data: getAllPatients,
    error: errorPatients,
    getOneObj: getOnePatient,
    createObj: createPatient,
    updateObj: updatePatient,
    deleteObj: deletePatient,
    login: loginPatient,
  } = useServer("patients");
  const {
    data: getAllDoctors,
    error: errorDoctors,
    getOneObj: getOneDoctor,
    createObj: createDoctor,
    updateObj: updateDoctor,
    deleteObj: deleteDoctor,
    login: loginDoctor,
  } = useServer("doctors");
  const {
    data: getAllReservations,
    error: errorReservations,
    getOneObj: getOneReservation,
    createObj: createReservation,
    updateObj: updateReservation,
    deleteObj: deleteReservation,
    getAllReservationByPatientID,
    getAllReservationByDoctorID,
  } = useServer("reservations");
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/doctor/profile"
          element={
            <DoctorProfile
              getAllReservations={getAllReservations}
              updateReservation={updateReservation}
              getAllPatients={getAllPatients}
              getAllReservationByDoctorID={getAllReservationByDoctorID}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage loginDoctor={loginDoctor} />}
        />
        <Route
          path="/register"
          element={<RegisterPage createPatient={createPatient} />}
        />
        <Route
          path="/bookingpage"
          element={
            <PartClient
              createReservation={createReservation}
              getAllReservationByID={getAllReservationByPatientID}
            />
          }
        />
        <Route
          path="/contacts"
          element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
