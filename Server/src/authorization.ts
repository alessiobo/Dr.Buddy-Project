import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import { db } from "./DB/db.js";
dotenv.config();

// interface User {
//   id_doctor: number;
//   id_patient: number;
//   firstname: string;
// }

function authRole(roles: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.user);

    const { id_doctor }: number | any = req.user;

    try {
      const doctor = await db.oneOrNone(
        `SELECT * FROM doctor WHERE id_doctor=$1;`,
        id_doctor
      );
      if (!roles.includes(doctor.role)) {
        return res
          .status(403)
          .send(
            "Access denied. You do not have permission to perform this action."
          );
      }
      req.user = doctor;
      next();
    } catch (error) {
      res.status(404).json({ msg: "pagina non trovata" });
    }
  };
}

export default authRole;
