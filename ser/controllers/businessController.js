import Business from "../models/businessModel.js";

export const getBusiness = async (req, res) => {
  const business = await Business.find();
  if (!business) return res.status(404).json({ message: "No business found" });
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
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

export const createBusiness = async (req, res) => {
  const createdBy = req.user.id;
  const {
    name,
    description,
    category,
    contact: { phone, email, website },
  } = req.body;
  const createBusiness = await Business.create({
    name,
    description,
    category,
    contact: { phone, email, website },
    createdBy,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Enter ALll Fields" });
      }
      res.status(200).json({
        success: true,
        message: "Business Created",
      });
    })
    .catch((err) => {
      console.log(err);
    });
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
