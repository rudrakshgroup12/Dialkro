import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middelware/authmiddelware.js";

//router object
const router = express.Router();

//routing
//Register || Method Post
router.post("/register", registerController);

//Login || Post
router.post("/login", loginController);

//Forgot Password || Post
router.post("/forgot-password", forgotPasswordController);

//text routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user route- auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;