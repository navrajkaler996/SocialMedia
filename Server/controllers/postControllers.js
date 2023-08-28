import pool from "../config/db.js";
import { GET_POSTS_BY_USERID } from "../queries/postQueries.js";

//FETCH all the posts made by a user using the userid.
//GET @ /api/vi/getPostsByUserId/:userid
export const getPostsByUserId = (req, res) => {
  const { userid, offset } = req.params;
  pool.query(GET_POSTS_BY_USERID, [userid, offset], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//1, 4 -> 0;
//5, 8 -> 4
