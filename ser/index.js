import express from "express";
import helmet from "helmet";
import fs from 'fs'
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import cnD from "./config/db.js";
import cookieParser from "cookie-parser";
cnD();
const app = express();


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-Frame-Options", "SAMEORIGIN");
  next();
});
// app.use(cors())
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

import userRoutes from "./routes/userRoutes.js";
import BusnessRoutes from "./routes/businessRoutes.js";
app.use("/api", userRoutes);
app.use("/api", BusnessRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
