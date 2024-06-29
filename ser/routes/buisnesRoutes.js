import express from "express";
import auth from "../middelware/auth.js";

import formidable from "express-formidable";

import { buisnessCountController, buisnessListController, buisnessPhoto2Controller, buisnessPhoto3Controller, buisnessPhoto4Controller, buisnessPhoto5Controller, buisnessPhotoController, createBuisnessController, deleteBuisnessController, getBuisnessController, getSingleBuisnessController, relatedBuisnessesController, updateBuisnessController } from "../controllers/buisnessController.js";

const router = express.Router();

//create-buisness
router.post("/create-buisness", auth, formidable(), createBuisnessController);

//update-buisness
router.put(
  "/update-buisness/:pid",
  auth,
  formidable(),
  updateBuisnessController
);

// get-buisness
router.get("/get-buisness", getBuisnessController);

//get-single-Buisness
router.get("/get-buisness/:slug", getSingleBuisnessController);

//get-photo
router.get("/buisness-photo/:pid", buisnessPhotoController);

//get-photo2
router.get("/buisness-photo2/:pid", buisnessPhoto2Controller);

//get-photo3
router.get("/buisness-photo3/:pid", buisnessPhoto3Controller);

//get-photo4
router.get("/buisness-photo4/:pid", buisnessPhoto4Controller);

//get-photo5
router.get("/buisness-photo5/:pid", buisnessPhoto5Controller);

//delete-buisness
router.delete("/delete-buisness/:pid", deleteBuisnessController);

//count buisness
router.get("/buisness-count", buisnessCountController);

//buisness per page
router.get("/buisness-list/:page", buisnessListController);

//similar buisness
router.get("/related-buisness/:pid/:cid", relatedBuisnessesController);

export default router;