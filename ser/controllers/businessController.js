import Business from "../models/businessModel.js";
// import features from "../utils/features.js";
import errorHandler from "express-async-handler";

export const getBusiness = errorHandler(async (req, res) => {
  //For Pageination ,and Homw Many Business SHould Display At once ,
  // ANd how many Pages skip
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  //Category Filter
  const query = {};
  if (req.query.category) {
    query.category = req.query.category;
  }

  if (req.query.city) {
    query.city = req.query.city;
  }

  const busCount = await Business.countDocuments();
  const allBusiness = await Business.find(query);

  if (!allBusiness)
    return res.status(404).json({ message: "No business found" });

  res.status(201).json({
    message: "Busienss Found",
    success: true,
    total: busCount,
    allBusiness,
  });
});

// export const getBusiness = errorHandler(async (req, res) => {
//   const resultperpage = 6;

//   const busCount = await Business.countDocuments();

//   const apiFeature = new features(Business.find(), req.query)
//     .search()
//     .filter()
//     .pagination(resultperpage);
//   const business = await apiFeature.query;
//   // const category = await business.distinct("category");
//   // console.log(query)
//   if (!business) return res.status(404).json({ message: "No business found" });

//   res.status(201).json({
//     message: "Busienss Found",
//     success: true,
//     business,
//     busCount,
//   });
// });

export const getBusinessById = async (req, res) => {
  const business = await Business.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "No business found" });
      }
      return res.status(200).json({
        success: true,
        message: "Business Found",
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

export const createBusiness = async (req, res, next) => {
  try {
    req.body.user = req.user._id;
    const createdBusiness = await Business.create(req.body)
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Business Created",
          data,
        });
      })
      .catch((err) => {
        res.status(404).json({ message: "Enter all fields" });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }

  // const {
  //   name,
  //   description,
  //   category,
  //   contact: { phone, email, website },
  // } = req.body;
  // const createBusiness = await Business.create({
  //   name,
  //   description,
  //   category,
  //   contact: { phone, email, website },

  // })
  //   .then((data) => {
  //     if (!data) {
  //       return res.status(404).json({ message: "Enter ALll Fields" });
  //     }
  //     res.status(200).json({
  //       success: true,
  //       message: "Business Created",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

export const updateBussiness = async (req, res) => {
  const updateBusiness = await Business.findByIdAndUpdate(
    req.params.id,
    req.body
  )
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: Error.message });
      }
      return res.status(200).json({
        success: true,
        message: "Business Updated",
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

export const deleteBusiness = async (req, res, next) => {
  const deleteBusiness = await Business.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: Error.message });
      }
      return res.status(200).json({
        success: true,
        message: "Business Deleted",
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

export const businessbycategory = async (req, res, next) => {
  // res.send("fuck the world");
  const allCategories = await Business.distinct("category")
    .then((data) => {
      res.status(200).json({
        success: true,
        message: `Business Found With Selected Category`,
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });


};

// export const getBusinesscategory = async (req, res) => {
//   const business = await Business.find();
//   if (!business.category) return res.status(404).json({ message: "No category found" });
//   res.status(201).json({
//     message: "Busienss Found",
//     success: true,

//   });
// };


  // console.log(allCategories);
  // if (!allCategories || allCategories.length === 0) {
  //   return res.status(404).json({ message: "No categories found" });
  // }

  // res.status(200).json({
  //   success: true,
  //   message: `Business Found With Selected Category`,
  //   allCategories,
  // });