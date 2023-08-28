import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "navrajkaler",
  host: "localhost",
  database: "socialmedia",
  password: "Bitchplease1996*",
  port: "5432",
});

export default pool;
