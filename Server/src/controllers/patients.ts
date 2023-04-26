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
  name: Joi.string().required(),
});

// async function createPatient(req: Request, res: Response,next) {
async function createPatient(req: Request, res: Response) {
  try {
    const { name } = req.body;

    const newPatient = { name };

    const validation = patientSchemaBody.validate(newPatient);

    if (validation.error) {
      res.status(400).json({ msg: "error 400" });
    } else {
      await db.none(`INSERT INTO patient (name) VALUES ($1)`, name);
      res.status(200).json({ msg: "create new patient" });
    }
  } catch (error) {
    // next(error);
  }
}

async function updatePatientByID(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;

  await db.none(`UPDATE patient SET name=$2 WHERE id_patient=$1`, [id, name]);

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
