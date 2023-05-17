import { Request, Response } from "express";
import Joi from "joi";

import { db } from "../DB/db.js";

//CRUD
async function getAllReservations(req: Request, res: Response) {
  const reservations = await db.many(`SELECT * FROM reservation;`);
  res.status(200).json(reservations);
}

async function getReservationByID(req: Request, res: Response) {
  const { id } = req.params;

  const reservation = await db.oneOrNone(
    `SELECT * FROM reservation WHERE id_reservation=$1;`,
    Number(id)
  );

  res.status(200).json(reservation);
}
async function getAllReservationByPatientID(req: Request, res: Response) {
  const { id } = req.params;

  const reservation = await db.manyOrNone(
    `SELECT * 
      FROM reservation 
      LEFT JOIN doctor ON doctor.id_doctor = reservation.id_doctor
      WHERE id_patient=$1;`,
    Number(id)
  );

  res.status(200).json(reservation);
}
async function getAllReservationByDoctorID(req: Request, res: Response) {
  const { id } = req.params;

  const reservation = await db.manyOrNone(
    `SELECT * 
      FROM reservation
      LEFT JOIN patient ON patient.id_patient = reservation.id_patient    
      WHERE id_doctor=$1;`,
    Number(id)
  );

  res.status(200).json(reservation);
}

const reservationSchemaBody = Joi.object({
  id_patient: Joi.number().integer(),
  id_doctor: Joi.number().integer().required(),
  date_reservation: Joi.date().required(),
});

async function createReservation(req: Request, res: Response) {
  try {
    const { id_patient, id_doctor, date_reservation } = req.body;

    const newReservation = { id_patient, id_doctor, date_reservation };

    const validation = reservationSchemaBody.validate(newReservation);

    if (validation.error) {
      res.status(400).json({ msg: "error 400" });
    } else {
      await db.none(
        `INSERT INTO reservation (id_patient,id_doctor,date_reservation) VALUES ($1,$2,$3)`,
        [id_patient, id_doctor, date_reservation]
      );
      res.status(200).json({ msg: "create new reservation" });
    }
  } catch (error) {
    res.status(500).json({ msg: "valore già inserito" });
  }
}

async function updateReservationByID(req: Request, res: Response) {
  const { id } = req.params;
  const { date_reservation, id_patient } = req.body;

  await db.none(
    `UPDATE reservation SET date_reservation=$2,id_patient=$3 WHERE id_reservation=$1`,
    [id, date_reservation, id_patient]
  );

  res.status(200).json({ msg: "updato" });
}

async function deleteReservationByID(req: Request, res: Response) {
  const { id } = req.params;
  await db.none(`DELETE FROM reservation WHERE id_reservation=$1`, Number(id));

  res.status(200).json({ msg: "The reservation was deleted." });
}

export {
  getAllReservations,
  getReservationByID,
  createReservation,
  updateReservationByID,
  deleteReservationByID,
  getAllReservationByDoctorID,
  getAllReservationByPatientID,
};
