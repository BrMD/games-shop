import mongoose from "mongoose";
import db from "../../connection.mjs";
import express from "express";
import gameModel from "../../schemas/game.model.mjs";
const router = express.Router();

router.patch("/:id", async (req, res) => {
  try {
    let collection = await db.collection("games");
    const id = new mongoose.Types.ObjectId(req.params.id.trim());
    let query = { _id: id };
    let updateDocument = req.body;
    updateDocument = new gameModel(updateDocument);
    let result = await collection.updateOne(query, updateDocument);
    if (!result.modifiedCount) throw new Error("Cannot update the game");
    res.send(result).status(200);
  } catch (e) {
    res.status(404).send(e);
  }
});
export default router;
