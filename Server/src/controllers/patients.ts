import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import Joi from "joi";
import { db } from "../DB/db.js";
import jwt from "jsonwebtoken";

//CRUD
async function getAllPatients(req: Request, res: Response) {
  const patients = await db.many(`SELECT * FROM patient;`);
  res.status(200).json(patients);
}

async function getPatientByID(req: Request, res: Response) {
  const { id } = req.params;

  const patient = await db.oneOrNone(
    `SELECT * FROM patient WHERE id_patient=$1;`,
    Number(id)
  );

  res.status(200).json(patient);
}

const patientSchemaBody = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().required(),
  tel_num: Joi.string().required(),
  password: Joi.string().required(),
});

// async function createPatient(req: Request, res: Response,next) {
async function createPatient(req: Request, res: Response) {
  try {
    const { firstname, lastname, email, tel_num, password } = req.body;

    const newPatient = { firstname, lastname, email, tel_num, password };

    const validation = patientSchemaBody.validate(newPatient);

    if (validation.error) {
      res.status(400).json({ msg: "error 400" });
    } else {
      await db.none(
        `INSERT INTO patient (firstname, lastname, email, tel_num, password) VALUES ($1,$2,$3,$4,$5)`,
        [firstname, lastname, email, tel_num, password]
      );
      res.status(200).json({ msg: "create new patient" });
    }
  } catch (error) {
    // next(error);
  }
}

async function updatePatientByID(req: Request, res: Response) {
  const { id } = req.params;
  const { firstname } = req.body;

  await db.none(`UPDATE patient SET firstname=$2 WHERE id_patient=$1`, [
    id,
    firstname,
  ]);

  res.status(200).json({ msg: "updato" });
}

async function deletePatientByID(req: Request, res: Response) {
  const { id } = req.params;
  await db.none(`DELETE FROM patient WHERE id_patient=$1`, Number(id));

  res.status(200).json({ msg: "The patient was deleted." });
}

async function logIn(req: Request, res: Response) {
  const { firstname, password } = req.body;

  try {
    const patient = await db.one(
      `SELECT * FROM patient WHERE firstname=$1`,
      firstname
    );

    if (patient && patient.password === password) {
      const payload = {
        id_patient: patient.id_patient,
        firstname,
      };
      const { SECRET = "" } = process.env;
      const token = jwt.sign(payload, SECRET);

      await db.none(`UPDATE patient SET token=$2 WHERE id_patient=$1`, [
        patient.id_patient,
        token,
      ]);

      res.status(200).json({ id: patient.id_patient, firstname, token });
    } else {
      res.status(400).json({ msg: "Username or password incorrect" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
}

//!Abbiamo già createPatient che fa la stessa cosa
// async function signUp(req: Request, res: Response) {
//   const { firstname, password } = req.body;
//   const patient = await db.oneOrNone(
//     `SELECT * FROM patient WHERE firstname=$1`,
//     firstname
//   );

//   if (patient) {
//     res.status(409).json({ msg: "Username already exist" });
//   } else {
//     const { id_patient } = await db.one(
//       `INSERT INTO patient (firstname,password) VALUES ($1,$2) RETURNING id_patient`,
//       [firstname, password]
//     );

//     res.status(201).json({ id_patient, msg: "User created successfully" });
//   }
// }

async function logOut(req: Request, res: Response) {
  // try {
  //   const user: any = req.user;
  //   console.log(user);
  //   await db.none(`UPDATE patient SET token=$2 WHERE id_patient=$1`, [
  //     user?.id,
  //     null,
  //   ]);
  //   res.status(200).json({ msg: "Logout successful." });
  // } catch (error) {
  //   console.log(error);
  // }
}

export {
  getAllPatients,
  getPatientByID,
  createPatient,
  updatePatientByID,
  deletePatientByID,
  logIn,
  logOut,
};
