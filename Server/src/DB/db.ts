import pgPromise from "pg-promise";
//postgres://username:password
const db = pgPromise()("postgres://postgres:root@localhost:5432/postgres");

const setupDB = async () => {
  await db.none(` 
  DROP TABLE IF EXISTS reservation;
  DROP TABLE IF EXISTS patient; 

  CREATE TABLE patient (
    id_patient SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
  );  

  CREATE TABLE reservation(
    id_reservation SERIAL NOT NULL PRIMARY KEY,
    id_patient INTEGER NOT NULL,
    ora VARCHAR(20) NOT NULL,
    stato VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_patient) REFERENCES patient (id_patient)
  );


`);
  await db.none(`INSERT INTO patient (name) VALUES ('Mario')`);
  await db.none(`INSERT INTO patient (name) VALUES ('Luigi')`);
  await db.none(`INSERT INTO patient (name) VALUES ('Peach')`);

  await db.none(
    `INSERT INTO reservation (id_patient,ora,stato) VALUES (1,'12:00','ok')`
  );
  await db.none(
    `INSERT INTO reservation (id_patient,ora,stato) VALUES (2,'14:00','ok')`
  );
  await db.none(
    `INSERT INTO reservation (id_patient,ora,stato) VALUES (2,'17:00','ok')`
  );
};

setupDB();

export { db };
