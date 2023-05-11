import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
// import passport from "passport";

// const authorize = (req: Request, res: Response, next: NextFunction) => {
//   passport.authenticate("jwt", { session: false }, (err: Error, user: any) => {
//     if (!user || err) {
//       res.status(401).json({ msg: "Unathorized." });
//     } else {
//       req.user = user;

//       next();
//     }
//   })(req, res, next);
// };

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const token = header.split(" ")[1];
    if (token === null) return res.sendStatus(401);

    const { SECRET = "" } = process.env;

    jwt.verify(token, SECRET, (err, user) => {
      if (!user || err) {
        res.status(401).json({ msg: "Unathorized." });
      } else {
        req.user = user;

        next();
      }
    });
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};

export default checkToken;
