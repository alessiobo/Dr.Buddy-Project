import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import Joi from "joi";
import { db } from "../DB/db.js";
import jwt from "jsonwebtoken";

//CRUD
async function getAllDoctors(req: Request, res: Response) {
  const doctors = await db.many(`SELECT * FROM doctor;`);
  res.status(200).json(doctors);
}

async function getDoctorByID(req: Request, res: Response) {
  const { id } = req.params;

  const doctor = await db.oneOrNone(
    `SELECT * FROM doctor WHERE id_doctor=$1;`,
    Number(id)
  );

  res.status(200).json(doctor);
}

const doctorSchemaBody = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().required(),
  tel_num: Joi.string().required(),
  password: Joi.string().required(),
});

// async function createPatient(req: Request, res: Response,next) {
async function createDoctor(req: Request, res: Response) {
  try {
    const { firstname, lastname, email, tel_num, password } = req.body;

    const newDoctor = { firstname, lastname, email, tel_num, password };

    const validation = doctorSchemaBody.validate(newDoctor);

    if (validation.error) {
      res.status(400).json({ msg: "error 400" });
    } else {
      await db.none(
        `INSERT INTO doctor (firstname, lastname, email, tel_num, password) VALUES ($1,$2,$3,$4,$5)`,
        [firstname, lastname, email, tel_num, password]
      );
      res.status(200).json({ msg: "create new doctor" });
    }
  } catch (error) {
    // next(error);
  }
}

async function updateDoctorByID(req: Request, res: Response) {
  const { id } = req.params;
  const { firstname, lastname, email, tel_num, password } = req.body;

  await db.none(
    `UPDATE doctor SET firstname=$2,lastname=$3,email=$4,tel_num=$5,password=$6 WHERE id_doctor=$1`,
    [id, firstname, lastname, email, tel_num, password]
  );

  res.status(200).json({ msg: "updato" });
}

async function deleteDoctorByID(req: Request, res: Response) {
  const { id } = req.params;
  await db.none(`DELETE FROM doctor WHERE id_doctor=$1`, Number(id));

  res.status(200).json({ msg: "The doctor was deleted." });
}

async function logInDoctor(req: Request, res: Response) {
  const { firstname, password } = req.body;

  try {
    const doctor = await db.one(
      `SELECT * FROM doctor WHERE firstname=$1`,
      firstname
    );

    if (doctor && doctor.password === password) {
      const payload = {
        id_doctor: doctor.id_doctor,
        firstname,
      };
      const { SECRET = "" } = process.env;
      const token = jwt.sign(payload, SECRET);

      await db.none(`UPDATE doctor SET token=$2 WHERE id_doctor=$1`, [
        doctor.id_doctor,
        token,
      ]);

      res.status(200).json({ id: doctor.id_doctor, firstname, token });
    } else {
      res.status(400).json({ msg: "Username or password incorrect" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
}

async function logOutDoctor(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await db.none(`UPDATE doctor SET token=$2 WHERE id_doctor=$1`, [id, null]);
    res.status(200).json({ msg: "Logout successful." });
  } catch (error) {
    console.log(error);
  }
}

export {
  getAllDoctors,
  getDoctorByID,
  createDoctor,
  updateDoctorByID,
  deleteDoctorByID,
  logInDoctor,
  logOutDoctor,
};
