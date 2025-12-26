import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    price: Number,
    originalPrice: Number,
    category: String,
    affiliateLink: String,
    platform: String,
  },
  { timestamps: true }
);

export default mongoose.model("Deal", dealSchema);
