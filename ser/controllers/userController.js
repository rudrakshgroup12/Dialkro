import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res, next) => {
  const users = await User.find();
  if (!users) return res.status(404).json({ message: "No users Found" });

  res.status(200).json({
    success: true,
    data: users,
  });
};

export const getUserbyId = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({
    success: true,
    data: user,
  });
};

export const updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((data) => {
      return res.status(200).json({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username)
    return res.status(400).send({ message: "Please provide all fields" });

  const userExistWithThatName = await User.findOne({ username });
  if (userExistWithThatName)
    return res.status(400).json({ message: "User already exists" });

  const userExistWithThatEmail = await User.findOne({ email });
  if (userExistWithThatEmail)
    return res.status(400).json({ message: "User already exists" });

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ email, password, username });
  const token =await User.getToken();
  res.cookie("token", token, { httpOnly: true });
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    token,
  });
  // .then((data) => {
  //   const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, {
  //     expiresIn: process.env.JWT_EXPIRE_TIME,
  //   });
  //   res.cookie("token", token, { httpOnly: true });
  //   return res.status(201).json({
  //     success: true,
  //     message: "User registered successfully",
  //     token,
  //   });
  // })
  // .catch((err) => {
  //   return res.status(500).json({
  //     success: false,
  //     message: `invalid email or password ${err}`,
  //   });
  // });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send({ message: "Please provide all fields" });

  const user = await User.findOne({ email }).select("+password");
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "invalid email or password" });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
  // Set the JWT as a cookie
  res.cookie("token", token, { httpOnly: true });
  return res.status(200).json({
    success: true,
    message: "login successful",
    token,
  });
};

export const logout = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "logout successful",
  });
};
