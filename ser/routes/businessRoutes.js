import express from "express";
import {
  createBusiness,
  deleteBusiness,
  getBusiness,
  getBusinessById,
} from "../controllers/businessController.js";
import Auth, { isLogin } from "../middelware/auth.js";
const BusnessRoutes = express.Router();

BusnessRoutes.get("/business" ,Auth,isLogin, getBusiness);
BusnessRoutes.get("/business/:id", getBusinessById);
BusnessRoutes.post("/business", createBusiness);
BusnessRoutes.delete("/business/:id", deleteBusiness);
export default BusnessRoutes;
