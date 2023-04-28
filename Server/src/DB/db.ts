import pgPromise from "pg-promise";
//postgres://username:password
const db = pgPromise()("postgres://postgres:root@localhost:5432/postgres");

const setupDB = async () => {
  await db.none(` 
  DROP TABLE IF EXISTS reservation;
  DROP TABLE IF EXISTS patient; 

  CREATE TABLE patient (
    id_patient SERIAL NOT NULL PRIMARY KEY,
    firstname VARCHAR(45) NOT NULL,
    lastname VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    tel_num VARCHAR(15),
    password VARCHAR(65) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP

  );  

  CREATE TABLE reservation(
    id_reservation SERIAL NOT NULL PRIMARY KEY,
    id_patient INTEGER NOT NULL,
    date_reservation VARCHAR(10),
    ora VARCHAR(20) NOT NULL,
    stato VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_patient) REFERENCES patient (id_patient)
  );


`);
  await db.none(
    `INSERT INTO patient (firstname,lastname,email,tel_num,password) VALUES ('Mario','Rossi', 'email@email.com','12345','password')`
  );
  await db.none(
    `INSERT INTO patient (firstname,lastname,email,tel_num,password) VALUES ('Luigi','Bianchi', 'email@email.com','12345','password')`
  );
  await db.none(
    `INSERT INTO patient (firstname,lastname,email,tel_num,password) VALUES ('Pippo','Verdi', 'email@email.com','12345','password')`
  );

  await db.none(
    `INSERT INTO reservation (id_patient,ora,stato,date_reservation) VALUES (1,'12:00','ok','28-01-1994')`
  );
  await db.none(
    `INSERT INTO reservation (id_patient,ora,stato,date_reservation) VALUES (2,'14:00','ok','29-01-2000')`
  );
  await db.none(
    `INSERT INTO reservation (id_patient,ora,stato,date_reservation) VALUES (3,'17:00','ok','24-56-2023')`
  );
};

setupDB();

export { db };
