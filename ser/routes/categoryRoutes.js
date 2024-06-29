import express from "express";
import {
  categaryController,
  createCategoryController,
  deleteCategoryController,
  singlecategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//create-category
router.post("/create-category", createCategoryController);

//update-category
router.put("/update-category/:id", updateCategoryController);

//get-all category
router.get("/get-category", categaryController);

//single-cteegory
router.get("/single-category/:slug", singlecategoryController);

//delete-category
router.delete("/delete-category/:id", deleteCategoryController);

export default router;

// import express from "express";
// import {
//   createCategory,
//   getCategorybyId,
//   getcategory,
//   updateCategory,
// } from "../controllers/busnesscategoryControll.js";
// import auth from "../middelware/auth.js";
// const categoryRoutes = express.Router();

// categoryRoutes.get("/category", getcategory);
// categoryRoutes.get("/category/:id", getCategorybyId);
// categoryRoutes.put("/category/:id", updateCategory);
// categoryRoutes.post("/category", createCategory);

// export default categoryRoutes;