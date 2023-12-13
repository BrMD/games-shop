import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  permissionLevel: Number,
});

const userModel = mongoose.model("Users", userSchema);
