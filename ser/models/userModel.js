import mongoose from "mongoose";
import validate from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter Your Name"],

      unique: [true, "Username already exists"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: [true, "Email already exists"],
      validate: [validate.isEmail, "Please enter a valid email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      select: false,
    },
    name: {
      type: String,
      trim: true,
    },
    profilePicture: {
      type: String,
    },
    // Add other user-related fields as needed
    // For example: dateOfBirth, address, phone, etc.
    dateOfBirth: {
      type: Date,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Role-specific values, you can add more roles as needed
      default: "user",
      select:false
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
  // user.tokens = user.tokens.concat({ token });
  // await user.save();
};

const User = mongoose.model("User", userSchema);
export default User;
