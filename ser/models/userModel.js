import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Email should be unique
    },
    password: {
      type: String,
      required: true,
      // select: false, // Uncomment if you want to hide the password in queries
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      // type: String, // Changed from {} to String for better validation
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    // Removed the username field
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
