import express from "express";
import {
  createBusiness,
  deleteBusiness,
  getBusiness,
  getBusinessById,
} from "../controllers/businessController.js";
import auth from "../middelware/auth.js";
const BusnessRoutes = express.Router();

BusnessRoutes.get("/business", getBusiness);
BusnessRoutes.get("/business/:id", getBusinessById);
BusnessRoutes.post("/business", auth, createBusiness);
BusnessRoutes.delete("/business/:id", auth, deleteBusiness);
export default BusnessRoutes;
