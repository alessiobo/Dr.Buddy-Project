import pgPromise from "pg-promise";
//postgres://username:password
const db = pgPromise()("postgres://postgres:root@localhost:5432/postgres");

const setupDB = async () => {
  await db.none(`

  DROP TABLE IF EXISTS patient CASCADE;

CREATE TABLE patient (
  id_patient SERIAL NOT NULL PRIMARY KEY,
  firstname VARCHAR(45) NOT NULL,
  lastname VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  tel_num VARCHAR(15),
  password VARCHAR(65) NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  role VARCHAR(15),
  token TEXT
);

DROP TABLE IF EXISTS doctor CASCADE;

CREATE TABLE doctor (
  id_doctor SERIAL NOT NULL PRIMARY KEY,
  firstname VARCHAR(45) NOT NULL,
  lastname VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  tel_num VARCHAR(15),
  password VARCHAR(65) NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  role VARCHAR(15),
  token TEXT
);

DROP TABLE IF EXISTS reservation CASCADE;

CREATE TABLE reservation(
  id_reservation SERIAL NOT NULL PRIMARY KEY,
  id_patient INTEGER,
  id_doctor INTEGER NOT NULL,
  date_reservation TIMESTAMP,
  FOREIGN KEY (id_patient) REFERENCES patient (id_patient),
  FOREIGN KEY (id_doctor) REFERENCES doctor (id_doctor),
  UNIQUE (id_patient,id_doctor),
  UNIQUE (date_reservation,id_doctor)
);

`);
  //PATIENTS
  await db.none(
    `INSERT INTO patient (firstname,lastname,email,tel_num,password,role) VALUES ('Mario','Rossi', 'email@email.com','12345','password','client')`
  );
  await db.none(
    `INSERT INTO patient (firstname,lastname,email,tel_num,password,role) VALUES ('Luigi','Bianchi', 'email@email.com','12345','password','client')`
  );
  await db.none(
    `INSERT INTO patient (firstname,lastname,email,tel_num,password,role) VALUES ('Pippo','Verdi', 'email@email.com','12345','password','client')`
  );

  //DOCTORS
  await db.none(
    `INSERT INTO doctor (firstname,lastname,email,tel_num,password,role) VALUES ('Paperino','Paolino', 'email@email.com','12345','password','admin')`
  );
  await db.none(
    `INSERT INTO doctor (firstname,lastname,email,tel_num,password,role) VALUES ('Pluto','Dogo', 'email@email.com','12345','password','doctor')`
  );

  //RESERVATIONS
  await db.none(
<<<<<<< HEAD
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-26 17:00:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-25 10:00:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-24 16:30:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-23 11:00:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-23 9:00:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-22 15:00:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-22 12:30:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (2,null,'2023-05-23 10:30:00')`
=======
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-24 17:30:00')`
>>>>>>> 08de180aeb5b71b9995b6712c0cdfb913619c4fa
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (2,null,'2023-05-25 16:30:00')`
  );
  await db.none(
<<<<<<< HEAD
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (2,null,'2023-05-23 11:30:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (2,null,'2023-05-23 17:30:00')`
=======
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-24 11:00:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-24 12:00:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-24 10:30:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-24 10:00:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-24 09:30:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (2,null,'2023-05-25 12:30:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-24 09:00:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (1,null,'2023-05-24 08:30:00')`
  );
  await db.none(
    `INSERT INTO reservation (id_doctor,id_patient,date_reservation) VALUES (2,null,'2023-05-25 10:30:00')`
>>>>>>> 08de180aeb5b71b9995b6712c0cdfb913619c4fa
  );
};

setupDB();

export { db };
