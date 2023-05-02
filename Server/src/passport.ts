import * as dotenv from "dotenv";
import passport from "passport";
import passportJWT from "passport-jwt";
import { db } from "./DB/db.js";
dotenv.config();

const { SECRET } = process.env;

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      const patient = await db.one(
        `SELECT * FROM patient WHERE id_patient=$1`,
        payload.id
      );
      console.log(patient);

      try {
        return patient
          ? done(null, patient)
          : done(new Error("Patient not found."));
      } catch (error) {
        done(error);
      }
    }
  )
);
