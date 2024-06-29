import buisnessModel from "../models/buisnessModel.js";
import fs from "fs";
import slugify from "slugify";
// const mongoose = require("mongoose");
import mongoose from "mongoose";

export const createBuisnessController = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      email,
      category,
      phone,
      website,
      address,
      city,
      state,
      zipCode,
    } = req.fields;
    const { photo, photo2, photo3, photo4, photo5 } = req.files;

    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !email:
        return res.status(500).send({ error: "Email is required" });
      case !description:
        return res.status(500).send({ error: "Description is required" });
      case !category:
        return res.status(500).send({ error: "Category is required" });
      case !phone:
        return res.status(500).send({ error: "phone is required" });
      case !website:
        return res.status(500).send({ error: "website is required" });
      case !city:
        return res.status(500).send({ error: "City is required" });
      case !state:
        return res.status(500).send({ error: "State is required" });
      case !zipCode:
        return res.status(500).send({ error: "zipCode is required" });
      case photo && photo.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo is required and should be less than 1 MB" });
      case photo2 && photo2.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo2 is required and should be less than 1 MB" });
      case photo3 && photo3.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo3 is required and should be less than 1 MB" });
      case photo4 && photo4.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo4 is required and should be less than 1 MB" });
      case photo5 && photo5.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo5 is required and should be less than 1 MB" });
    }
    const buisness = new buisnessModel({
      name,
      description,
      email,
      category,
      phone,
      website,
      address,
      city,
      state,
      zipCode,
      slug: slugify(name),
    });
    if (photo || photo2 || photo3 || photo4 || photo5) {
      buisness.photo.data = fs.readFileSync(photo.path);
      buisness.photo2.data = fs.readFileSync(photo2.path);
      buisness.photo3.data = fs.readFileSync(photo3.path);
      buisness.photo4.data = fs.readFileSync(photo4.path);
      buisness.photo5.data = fs.readFileSync(photo5.path);
      buisness.photo.contentType = photo.type;
      buisness.photo2.contentType = photo2.type;
      buisness.photo3.contentType = photo3.type;
      buisness.photo4.contentType = photo4.type;
      buisness.photo5.contentType = photo5.type;
    }
    await buisness.save();
    res.status(201).send({
      success: true,
      message: "buisness created successfully",
      buisness,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating buisness",
    });
  }
};

export const getBuisnessController = async (req, res) => {
  try {
    const buisness = await buisnessModel
      .find({})
      .populate("category")
      .select("-photo")
      .select("-photo2")
      .select("-photo3")
      .select("-photo4")
      .select("-photo5")
      .limit(1000)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      countTotal: buisness.length,
      message: "All Picture",
      buisness,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting buisness",
      error: error.message,
    });
  }
};

//get single buisness
export const getSingleBuisnessController = async (req, res) => {
  try {
    const buisness = await buisnessModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .select("-photo2")
      .select("-photo3")
      .select("-photo4")
      .select("-photo5")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Get Single buisness Successfully",
      buisness,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting single buisness",
      error,
    });
  }
};

//get photo
// export const buisnessPhotoController = async (req, res) => {
//   try {
//     const buisness = await buisnesModel
//       .findById(req.params.pid)
//       .select("photo");
//     if (buisness.photo.data) {
//       res.set("Content-Type", buisness.photo.contentType);
//       return res.status(200).send(buisness.photo.data);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in getting photo",
//       error,
//     });
//   }
// };

//get photo1-----------------------------------------------------------------------------------------------------------
export const buisnessPhotoController = async (req, res) => {
  try {
    const { pid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(pid)) {
      return res.status(400).send({
        success: false,
        message: "Invalid business ID",
      });
    }

    const buisness = await buisnessModel.findById(pid).select("photo");

    if (!buisness) {
      return res.status(404).send({
        success: false,
        message: "Business not found",
      });
    }

    if (buisness.photo && buisness.photo.data) {
      res.set("Content-Type", buisness.photo.contentType);
      return res.status(200).send(buisness.photo.data);
    } else {
      return res.status(404).send({
        success: false,
        message: "Photo not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting photo",
      error,
    });
  }
};

// photo2-Controller------------------------------------------------------------------------------------------------------
export const buisnessPhoto2Controller = async (req, res) => {
  try {
    const { pid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(pid)) {
      return res.status(400).send({
        success: false,
        message: "Invalid business ID",
      });
    }

    const buisness = await buisnessModel.findById(pid).select("photo2");

    if (!buisness) {
      return res.status(404).send({
        success: false,
        message: "Business not found",
      });
    }

    if (buisness.photo2 && buisness.photo2.data) {
      res.set("Content-Type", buisness.photo2.contentType);
      return res.status(200).send(buisness.photo2.data);
    } else {
      return res.status(404).send({
        success: false,
        message: "Photo2 not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting photo2",
      error,
    });
  }
};

//get photo3----------------------------------------------------------------------------------------------
export const buisnessPhoto3Controller = async (req, res) => {
  try {
    const { pid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(pid)) {
      return res.status(400).send({
        success: false,
        message: "Invalid business ID",
      });
    }

    const buisness = await buisnessModel.findById(pid).select("photo3");

    if (!buisness) {
      return res.status(404).send({
        success: false,
        message: "Business not found",
      });
    }

    if (buisness.photo3 && buisness.photo3.data) {
      res.set("Content-Type", buisness.photo3.contentType);
      return res.status(200).send(buisness.photo3.data);
    } else {
      return res.status(404).send({
        success: false,
        message: "Photo3 not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting photo3",
      error,
    });
  }
};
//get photo4----------------------------------------------------------------------------------------------
export const buisnessPhoto4Controller = async (req, res) => {
  try {
    const { pid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(pid)) {
      return res.status(400).send({
        success: false,
        message: "Invalid business ID",
      });
    }

    const buisness = await buisnessModel.findById(pid).select("photo4");

    if (!buisness) {
      return res.status(404).send({
        success: false,
        message: "Business not found",
      });
    }

    if (buisness.photo4 && buisness.photo4.data) {
      res.set("Content-Type", buisness.photo4.contentType);
      return res.status(200).send(buisness.photo4.data);
    } else {
      return res.status(404).send({
        success: false,
        message: "Photo4 not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting photo4",
      error,
    });
  }
};
//get photo5----------------------------------------------------------------------------------------------
export const buisnessPhoto5Controller = async (req, res) => {
  try {
    const { pid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(pid)) {
      return res.status(400).send({
        success: false,
        message: "Invalid business ID",
      });
    }

    const buisness = await buisnessModel.findById(pid).select("photo5");

    if (!buisness) {
      return res.status(404).send({
        success: false,
        message: "Business not found",
      });
    }

    if (buisness.photo5 && buisness.photo5.data) {
      res.set("Content-Type", buisness.photo5.contentType);
      return res.status(200).send(buisness.photo5.data);
    } else {
      return res.status(404).send({
        success: false,
        message: "Photo5 not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting photo5",
      error,
    });
  }
};

//delete-buisness controller
export const deleteBuisnessController = async (req, res) => {
  try {
    await buisnessModel
      .findByIdAndDelete(req.params.pid)
      .select("-photo")
      .select("-photo2")
      .select("-photo3")
      .select("-photo4")
      .select("-photo5");
    res.status(200).send({
      success: true,
      message: "Buisness deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting buisness",
      error,
    });
  }
};

//update Buisness
export const updateBuisnessController = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      email,
      category,
      phone,
      website,
      address,
      city,
      state,
      zipCode,
    } = req.fields;
    const { photo, photo2, photo3, photo4, photo5 } = req.files;

    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !email:
        return res.status(500).send({ error: "Email is required" });
      case !description:
        return res.status(500).send({ error: "Description is required" });
      case !category:
        return res.status(500).send({ error: "Category is required" });
      case !phone:
        return res.status(500).send({ error: "phone is required" });
      case !website:
        return res.status(500).send({ error: "website is required" });
      case !address:
        return res.status(500).send({ error: "address is required" });
      case !city:
        return res.status(500).send({ error: "City is required" });
      case !state:
        return res.status(500).send({ error: "State is required" });
      case !zipCode:
        return res.status(500).send({ error: "zipCode is required" });
      case photo && photo.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo is required and should be less than 1 MB" });
      case photo2 && photo2.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo2 is required and should be less than 1 MB" });
      case photo3 && photo3.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo3 is required and should be less than 1 MB" });
      case photo4 && photo4.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo4 is required and should be less than 1 MB" });
      case photo5 && photo5.size > 10000000:
        return res
          .status(500)
          .send({ error: "Photo5 is required and should be less than 1 MB" });
    }
    const buisness = await buisnessModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo || photo2 || photo3 || photo4 || photo5) {
      buisness.photo.data = fs.readFileSync(photo.path);
      buisness.photo2.data = fs.readFileSync(photo2.path);
      buisness.photo3.data = fs.readFileSync(photo3.path);
      buisness.photo4.data = fs.readFileSync(photo4.path);
      buisness.photo5.data = fs.readFileSync(photo5.path);
      buisness.photo.contentType = photo.type;
      buisness.photo2.contentType = photo2.type;
      buisness.photo3.contentType = photo3.type;
      buisness.photo4.contentType = photo4.type;
      buisness.photo5.contentType = photo5.type;
    }
    await buisness.save();
    res.status(201).send({
      success: true,
      message: "Buisness Updating successfully",
      buisness,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updating Buisness",
    });
  }
};

//buisness count
export const buisnessCountController = async (req, res) => {
  try {
    const total = await buisnessModel.find({}).estimatedDocumentCount();
    res.status(200).send({
      success: true,
      total,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in buisness count",
      error,
    });
  }
};

//buisness per page
export const buisnessListController = async (req, res) => {
  try {
    const perPage = 3;
    const page = req.params.page ? req.params.page : 1;
    const buisness = await buisnessModel
      .find({})
      .select("-photo")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      buisness,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in per page ctrl",
      error,
      success: false,
    });
  }
};

//similar buisness
export const relatedBuisnessesController = async (req, res) => {
  try {
    const { pid, cid } = req.params;
    const buisness = await buisnessModel
      .find({ category: cid, _id: { $ne: pid } })
      .select("-photo")
      .select("-photo2")
      .select("-photo3")
      .select("-photo4")
      .select("-photo5")
      .limit(8)
      .populate("category");
    res.status(200).send({
      success: true,
      buisness,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      meassage: "Error in Related Product API",
      error,
    });
  }
};