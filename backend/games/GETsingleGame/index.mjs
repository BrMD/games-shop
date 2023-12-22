import mongoose from "mongoose";
import db from "../../connection.mjs";
import express from "express";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    let collection = await db.collection("games");
    const id = new mongoose.Types.ObjectId(req.params.id.trim());
    let query = { _id: id };
    let result = await collection.findOne(query);
    if (!result) throw new Error("Cannot find the game");
    res.send(result).status(200);
  } catch (e) {
    res.status(404).send(e);
  }
});
export default router;
