import { DatabaseConnection } from "../config/database";

export const useDB = () => {
  const db = DatabaseConnection.getConnection();
  db.exec([{ sql: "PRAGMA foreign_keys = ON;", args: [] }], false, () =>
    console.log("Foreign keys turned on")
  );
  const initDB = () => {
    let qry = [
      `DROP TABLE IF EXISTS posts;`,
      `DROP TABLE IF EXISTS comments;`,
      `DROP TABLE IF EXISTS todos;`,

      `create table if not exists posts (
            userId integer,
            id integer primary key,
            title text,
            body text
         
            );`,
      `create table if not exists comments (
            id integer primary key,
            postId integer,
            name text,
            email text,
            body text,
            foreign key (postId) references posts (id)
            );`,
      `create table if not exists todos (
            userId integer,
            id integer primary key,
            title text,
            completed boolean
            );`,
    ];
    db.transaction(
      (tx) => {
        qry.map((val) => tx.executeSql(val));
      },
      (error) => {
        console.log("error call back : " + JSON.stringify(error));
        console.log(error);
      },
      () => {
        console.log("transaction complete call back ");
      }
    );
  };
  return { db, initDB };
};
