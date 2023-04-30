import { Request, Response } from "express";
import Joi from "joi";

import { db } from "../DB/db.js";

//CRUD
async function getAllReservations(req: Request, res: Response) {
  const reservations = await db.many(
    `SELECT * FROM reservation INNER JOIN patient ON reservation.id_patient = patient.id_patient;`
  );
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
async function getAllReservationByID(req: Request, res: Response) {
  const { id } = req.params;

  const reservation = await db.manyOrNone(
    `SELECT * FROM reservation WHERE id_patient=$1;`,
    Number(id)
  );

  res.status(200).json(reservation);
}

const reservationSchemaBody = Joi.object({
  id_patient: Joi.number().integer().required(),
  ora: Joi.string().required(),
  data: Joi.string().required(),
  stato: Joi.string().required(),
});

async function createReservation(req: Request, res: Response) {
  const { id_patient, ora, stato, data } = req.body;

  const newReservation = { id_patient, ora, stato, data };

  const validation = reservationSchemaBody.validate(newReservation);

  if (validation.error) {
    res.status(400).json({ msg: "error 400" });
  } else {
    await db.none(
      `INSERT INTO reservation (id_patient,ora,stato,date_reservation) VALUES ($1,$2,$3,$4)`,
      [id_patient, ora, stato, data]
    );
    res.status(200).json({ msg: "create new reservation" });
  }
}

async function updateReservationByID(req: Request, res: Response) {
  const { id } = req.params;
  const { stato } = req.body;

  await db.none(`UPDATE reservation SET stato=$2 WHERE id_reservation=$1`, [
    id,
    stato,
  ]);

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
  getAllReservationByID,
};
