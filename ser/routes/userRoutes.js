import express from "express";
import { getUsers, loginUser, logout, register } from "../controllers/userController.js";
const userRoutes = express.Router();

userRoutes.get("/users", getUsers);
userRoutes.post("/register", register);
userRoutes.post("/login", loginUser);
userRoutes.get("/logout", logout);
export default userRoutes;