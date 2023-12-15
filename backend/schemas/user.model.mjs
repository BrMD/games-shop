import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  permissionLevel: Number,
});

const userModel = mongoose.model("Users", userSchema);
