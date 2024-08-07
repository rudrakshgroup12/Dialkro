import express from "express";
// import auth from "../middelware/auth.js";
import {
  checkout,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

// router.route("/checkout").post(checkout);
router.post("/checkout", checkout);

router.route("/paymentverification").post(paymentVerification);

export default router;
