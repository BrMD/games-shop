import mongoose from "mongoose";
import db from "../../connection.mjs";
import express from "express";
const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    let collection = await db.collection("games");
    const id = new mongoose.Types.ObjectId(req.params.id.trim());
    let query = { _id: id };
    let result = await collection.deleteOne(query);
    if (!result.deletedCount) throw new Error("Cannot delete the games");
    res.send("Deleted successfully").status(204);
  } catch (e) {
    res.status(404).send(e);
  }
});
export default router;
