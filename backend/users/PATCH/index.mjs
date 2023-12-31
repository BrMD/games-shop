import mongoose from "mongoose";
import db from "../../connection.mjs";
import express from "express";
import userModel from "../../schemas/user.model.mjs";
const router = express.Router();

router.patch("/:id", async (req, res) => {
  try {
    let collection = await db.collection("users");
    const id = new mongoose.Types.ObjectId(req.params.id.trim());
    let query = { _id: id };
    let updateDocument = req.body;
    updateDocument = new userModel(updateDocument);
    let result = await collection.updateOne(query, updateDocument);
    if (!result.modifiedCount) throw new Error("Cannot find the user to edit");
    res.send(result).status(200);
  } catch (e) {
    res.status(404).send(e);
  }
});
export default router;
