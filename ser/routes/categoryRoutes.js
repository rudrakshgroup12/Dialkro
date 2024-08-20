import express from "express";
import { requireSignIn, isAdmin } from "../middelware/authmiddelware.js";
import {
  categaryController,
  createCategoryController,
  deleteCategoryController,
  singlecategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
// import auth from "../middelware/auth.js";
const router = express.Router();

//create-category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update-category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//get-all category
router.get("/get-category", categaryController);

//single-cteegory
router.get("/single-category/:slug", singlecategoryController);

//delete-category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
