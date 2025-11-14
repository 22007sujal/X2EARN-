import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "mysql-3b846bee-dicerps.i.aivencloud.com",
  port: 13054,
  user: "avnadmin",
  password: "AVNS_8nG2XrJSLzJxSNuH48H",
  database: "defaultdb",
  connectionLimit: 10,
});