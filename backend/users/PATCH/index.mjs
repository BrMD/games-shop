import mongoose from "mongoose";
import db from "../../connection.mjs";
import express from "express";
import userModel from "../../schemas/user.model.mjs";
const router = express.Router();

router.patch("/:id", async (req, res) => {
  let collection = await db.collection("users");
  const id = new mongoose.Types.ObjectId(req.params.id.trim());
  let query = { _id: id };
  let updateDocument = req.body;
  updateDocument = new userModel(updateDocument);
  let result = await collection.updateOne(query, updateDocument);

  if (!result) res.send("nao acho").status(404);
  else res.send(result).status(200);
});
export default router;
