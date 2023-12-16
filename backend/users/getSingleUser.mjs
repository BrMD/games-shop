import { ObjectId } from "mongodb";
import db from "../connection.mjs";
import express from "express";

const router = express.Router();

router.get("users/:id", async (req, res) => {
  let collection = await db.collection("users");
  let query = { _id: ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send("bateu aqui").status(200);
});

export default router;
