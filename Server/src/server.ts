import express from "express";
import "express-async-errors";
import morgan from "morgan";

import {
  getAllPatients,
  getPatientByID,
  createPatient,
  updatePatientByID,
  deletePatientByID,
  logInPatient,
  logOutPatient,
} from "./controllers/patients.js";

import {
  getAllDoctors,
  getDoctorByID,
  createDoctor,
  updateDoctorByID,
  deleteDoctorByID,
  logInDoctor,
  logOutDoctor,
} from "./controllers/doctors.js";

import {
  getAllReservations,
  getReservationByID,
  createReservation,
  updateReservationByID,
  deleteReservationByID,
  getAllReservationByPatientID,
  getAllReservationByDoctorID,
} from "./controllers/reservations.js";

import "./passport.js";

import checkToken from "./authentication.js";
import authRole from "./authorization.js";

const server = express();
const port = 5000;

server.use(morgan("dev"));
server.use(express.json());

// server.use(
//   cors({
//     origin,
//     preflightContinue: true,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//   })
// );

server.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader("Access-Control-Allow-Credentials");

  // Pass to next layer of middleware
  next();
});

server.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome" });
});

//Patients

server.get(
  "/patients",
  checkToken,
  authRole(["doctor", "admin"]),
  getAllPatients
);

server.get("/patients/:id", checkToken, authRole(["doctor"]), getPatientByID);

server.post("/patients", checkToken, createPatient);

server.put("/patients/:id", checkToken, updatePatientByID);

server.delete("/patients/:id", checkToken, deletePatientByID);

//Doctors

server.get("/doctors", checkToken, getAllDoctors);

server.get("/doctors/:id", checkToken, getDoctorByID);

server.post("/doctors", checkToken, authRole(["doctor"]), createDoctor);

server.put("/doctors/:id", checkToken, authRole(["doctor"]), updateDoctorByID);

server.delete(
  "/doctors/:id",
  checkToken,
  authRole(["doctor"]),
  deleteDoctorByID
);

//LogIN

server.post("/patients/login", logInPatient);
// server.post("/patients/signup", signUp);
// server.get("/patients/logout", authorize, logOutPatient);

server.post("/doctors/login", logInDoctor);
// server.post("/patients/signup", signUp);
// server.get("/doctors/logout", authorize, logOutDoctor);

//Reservations

server.get("/reservations", checkToken, getAllReservations);

server.get("/reservations/:id", checkToken, getReservationByID);

server.get(
  "/reservations/patient/:id",
  checkToken,
  getAllReservationByPatientID
);

server.get("/reservations/doctor/:id", checkToken, getAllReservationByDoctorID);

server.post("/reservations", checkToken, createReservation);

server.put("/reservations/:id", checkToken, updateReservationByID);

server.delete("/reservations/:id", checkToken, deleteReservationByID);

// server.use(error)

server.listen(port);
