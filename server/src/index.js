import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

// Connect to database
import "./db/sequelize.js";

// route
import postsRouter from "./routes/postsRoute.js";

const app = express();

const port = 3001;

// middleware
app.use(cors());
app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route
app.use("/api/v1/posts", postsRouter);

app.listen(port, () => {
  console.log("App is running!!!");
});
