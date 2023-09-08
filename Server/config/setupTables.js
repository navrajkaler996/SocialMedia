import pool from "./db.js";

import {
  CREATE_POSTS_TABLE,
  CREATE_USERS_TABLE,
} from "../queries/dbConfigQueries.js";

const setupTables = () => {
  pool.query(CREATE_USERS_TABLE, [], (error, result) => {
    if (!error) {
      pool.query(CREATE_POSTS_TABLE, [], (error, result) => {
        if (error?.code === "42P07") {
          console.log("Not createing new table. 'posts' table already exists!");
        } else if (error) throw new Error(error);
        console.log("'users' and 'posts' tables created!");
      });
    } else if (error?.code === "42P07") {
      console.log("Not createing new table. 'users' table already exists!");
    } else if (error) throw new Error(error);
  });
};

setupTables();
