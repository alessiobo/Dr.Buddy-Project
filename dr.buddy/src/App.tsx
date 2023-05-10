import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
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
  } = useServer("patients");
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
        <Route path="/login" element={<LoginPage />} />
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
      </Routes>
    </div>
  );
}

export default App;
