import express from "express";
import {
  businessbycategory,
  createBusiness,
  deleteBusiness,
  getBusiness,
  getBusinessById,
  updateBussiness,
} from "../controllers/businessController.js";
import auth from "../middelware/auth.js";
const BusnessRoutes = express.Router();

BusnessRoutes.get("/business", getBusiness);
BusnessRoutes.get("/business/:id", getBusinessById);
BusnessRoutes.put("/business/:id", updateBussiness);
BusnessRoutes.get("/category", businessbycategory);


BusnessRoutes.post("/business", auth, createBusiness);
BusnessRoutes.delete("/business/:id", auth, deleteBusiness);
export default BusnessRoutes;
