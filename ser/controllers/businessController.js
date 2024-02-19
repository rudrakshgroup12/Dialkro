import Business from "../models/businessModel.js";

export const getBusiness = async (req, res) => {
  const business = await Business.find();
  if (!business) return res.status(404).json({ message: "No business found" });
  res.status(201).json({
    message: "Busienss Found",
    success: true,
    business,
  });
};

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
    // console.log(req.user);
    // const {
    //   name,
    //   description,
    //   category,
    //   contact: { phone, email, website },
    // } = req.body;

    // // Assuming you have a user object attached to the request during authentication
    // const {
    //   name,
    //   description,
    //   category,
    //   contact: {
    //     phone,
    //     email,
    //     website, // Add more contact details as needed
    //   },
    //   location: {
    //     address,
    //     city,
    //     state,
    //     zipCode,
    //     // Add more location details as needed
    //   }
    // } = req.body;
    // const user = req.params.id;
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

    // {
    //   name,
    //   description,
    //   category,
    //   contact: {
    //     phone,
    //     email,
    //     website, // Add more contact details as needed
    //   },
    //   location: {
    //     address,
    //     city,
    //     state,
    //     zipCode,
    //     // Add more location details as needed
    //   },
    //   user,
    // }

    // console.log(req.user);
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
