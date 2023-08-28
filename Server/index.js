import express from "express";
import dotenv from "dotenv";
import postRouter from "./routes/postRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

//Routes for user posts
app.use("/api/v1/posts/", postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
