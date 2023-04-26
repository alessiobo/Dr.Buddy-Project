import { Request, Response } from "express";
import Joi from "joi";
import { db } from "../DB/db.js";

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

export {
  getAllPatients,
  getPatientByID,
  createPatient,
  updatePatientByID,
  deletePatientByID,
};
