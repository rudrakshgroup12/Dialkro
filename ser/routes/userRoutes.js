import express from "express";
import {
  findBusinessByUser,
  forgotPassword,
  getUserbyId,
  getUsers,
  loginUser,
  logout,
  // profile,
  register,
  updateUser,
} from "../controllers/userController.js";
import auth from "../middelware/auth.js";
const userRoutes = express.Router();
userRoutes.post("/register", register);
userRoutes.post("/login", loginUser);
//ADMIN
userRoutes.get("/users", auth, getUsers);
//USER
// userRoutes.get("/profile", auth, profile)
userRoutes.get("/profile/:id", auth, getUserbyId);
userRoutes.post("/profile/forgot", auth, forgotPassword);
userRoutes.put("/profile/:id", auth, updateUser);
userRoutes.get("/profile/business/:id", auth, findBusinessByUser);
userRoutes.get("/logout", auth, logout);
export default userRoutes;
