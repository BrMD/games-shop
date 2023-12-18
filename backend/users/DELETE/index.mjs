import mongoose from "mongoose";
import db from "../../connection.mjs";
import express from "express";
const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    let collection = await db.collection("users");
    const id = new mongoose.Types.ObjectId(req.params.id.trim());
    let query = { _id: id };
    let result = await collection.deleteOne(query);
    if (!result.deletedCount) throw new Error("ERROR user not found");
    res.status(204).send("User deleted");
  } catch (e) {
    console.error(e); // Log the error for debugging purposes
    res.status(404).send(e);
  }
});

export default router;
