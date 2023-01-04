import mongoose, { Mongoose, Schema } from "mongoose";

const productSchema = Mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: String, required: true },
    imgUrl: { type: String, required: true },
    size: { type: Array, require: true },
    color: { type: Array, require: true },
    likes: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
