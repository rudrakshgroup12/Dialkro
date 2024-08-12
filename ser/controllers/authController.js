import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";

// registerController
export const registerController = async (req, res) => {
  try {
    const { username, email, password, phone, address, answer } = req.body;

    //validations
    if (!username || !email || !password || !phone || !address || !answer) {
      return res.send({ message: "All Feilds Required" });
    }

    //check user
    const exisitingUser = await userModel.findOne({ email });

    //existing user
    if (exisitingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Register please login",
      });
    }

    //Register user
    const hashedPassword = await hashPassword(password);
    //save
    const newUser = await userModel
      .create({
        password: hashedPassword,
        phone,
        email,
        username,
        address,
        answer,
      })
      .then((data) => {
        res.status(201).send({
          success: true,
          message: "User Register Successfully",
          data: newUser,
        });
      })
      .catch((err) => {
        res.status(404).send({
          success: false,
          message: "User Registeration Failed",
          err,
        });
      });
  } catch (error) {
    console.log(error.stack);
    res.status(500).send({
      success: false,
      message: "Errr in Registeration",
      error,
    });
  }
  //   console.log(`route is working`);
};

//Post Login
export default { registerController };

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password ",
      });
    }

    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Wrong Password",
      });
    }

    //tokens
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login Successfully",
      user: {
        username: user.username,
        // password: user.password,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

//forgotpasswordController
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email || !answer || !newPassword) {
      return res.status(404).send({
        message: "All Feilds Required",
      });
    }

    //check
    const user = await userModel.findOne({ email, answer });

    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Answer or Email",
      });
    }

    //
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Changed Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};

//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Route");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
