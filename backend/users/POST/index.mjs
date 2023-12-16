import db from "../../connection.mjs";
import express from "express";
import userModel from "../../schemas/user.model.mjs";
const router = express.Router();

router.post("/", async (req, res) => {
  let collection = await db.collection("users");
  let newDocument = req.body;
  newDocument = new userModel(newDocument);
  await collection.insertOne(newDocument);
  res.send(req.body).status(201);
});
export default router;
