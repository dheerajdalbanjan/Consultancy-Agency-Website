import mongoose, { models } from "mongoose";
import { boolean } from "zod";

const PackageSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: String, // Use String to match the format "1799"
      required: true
    },
    mode: {
      type: String, // Use String to match the format "1799"
      required: true
    },
    sessions_included: {
      type: String,
      required: true // "6 Month Subscription"
    },
    session_length: {
      type: String,
      required: true // "40 minutes each"
    },
    counselor_matching: {
      type: String,
      required: true // "with professional counseling"
    },
    order_id: {
      type: String,
      required: true
    },
    payment_id: {
      type: String,
      required: true
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    availed: {
      type: Boolean, 
      default: false
    }
  }, { timestamps: true });
const Package = mongoose.models.Package ||  mongoose.model("Package", PackageSchema);
export default Package;
