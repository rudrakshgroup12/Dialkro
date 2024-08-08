import express from "express";
import helmet from "helmet";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import cnD from "./config/db.js";
import cookieParser from "cookie-parser";
import Razorpay from "razorpay";
// import path from "path";
// const cors = require('cors');

process.on("uncaughtException", (reason, p) => {
  console.error(reason, "Unhandled Rejection at Promise", p);
  process.exit(1);
});

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
// app.use(
//   cors({
//     // origin: ["https://dialkro.in"],
//     origin: ["https://localhost:5173"],
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
// import userRoutes from "./routes/userRoutes.js";

import buisnesRoutes from "./routes/buisnesRoutes.js";
import paymentRoute from "./routes/paymentRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import authRoutes from "./routes/authRoutes.js";
// import router from "./routes/authRoutes.js";

// app.use("/api", userRoutes);
// app.use("/api", router);

app.use("/api", buisnesRoutes);
app.use("/api", paymentRoute);
app.use("/api", categoryRoutes);
app.use("/api", authRoutes);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.get("/", (req, res, next) => {
  res.send("Homes Is Home");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting Down the server due to unhandled Promise Rejection`);
  server.close(() => {
    process.exit();
  });
});
