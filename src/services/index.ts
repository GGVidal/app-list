import { useDB } from "../database/database.init";

export const useServices = (table: string) => {
  const { db } = useDB();

  const addData = (param, column: string) => {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (${column}) 
                values (?)`,
            [param.nome],
            (_, { insertId, rows }) => {
              console.log("id insert: " + insertId);
              resolve(insertId);
            }
          ),
            (sqlError: Error) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  };
  return { addData };
};
