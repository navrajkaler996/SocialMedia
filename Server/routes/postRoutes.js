import express from "express";
import { getPostsByUserId } from "../controllers/postControllers.js";

const postRouter = express.Router();

//fetch user posts.
postRouter.get("/getPostsByUserId/:userid/:offset", getPostsByUserId);

export default postRouter;

