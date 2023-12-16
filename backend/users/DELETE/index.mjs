import mongoose from "mongoose";
import db from "../../connection.mjs";
import express from "express";
const router = express.Router();

router.delete("/:id", async (req, res) => {
  let collection = await db.collection("users");
  const id = new mongoose.Types.ObjectId(req.params.id.trim());
  let query = { _id: id };
  let result = await collection.deleteOne(query);
  if (!result) res.send("Didn't find the user to be deleted").status(404);
  else res.send("Deleted successfully").status(204);
});
export default router;
