import express from "express";
import "express-async-errors";
import morgan from "morgan";
import {
  getAllPatients,
  getPatientByID,
  createPatient,
  updatePatientByID,
  deletePatientByID,
} from "./controllers/patients.js";

import {
  getAllReservations,
  getReservationByID,
  createReservation,
  updateReservationByID,
  deleteReservationByID,
} from "./controllers/reservations.js";

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

//Clients

server.get("/patients", getAllPatients);

server.get("/patients/:id", getPatientByID);

server.post("/patients", createPatient);

server.put("/patients/:id", updatePatientByID);

server.delete("/patients/:id", deletePatientByID);

//Reservations

server.get("/reservations", getAllReservations);

server.get("/reservations/:id", getReservationByID);

server.post("/reservations", createReservation);

server.put("/reservations/:id", updateReservationByID);

server.delete("/reservations/:id", deleteReservationByID);

// server.use(error)

server.listen(port);
