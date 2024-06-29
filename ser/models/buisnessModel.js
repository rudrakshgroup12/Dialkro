import mongoose from "mongoose";
const buisnessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: { type: String, required: true },
    photo: {
      data: Buffer,
      contentType: String,
    },
    photo2: {
      data: Buffer,
      contentType: String,
    },
    photo3: {
      data: Buffer,
      contentType: String,
    },
    photo4: {
      data: Buffer,
      contentType: String,
    },
    photo5: {
      data: Buffer,
      contentType: String,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Buisness", buisnessSchema);