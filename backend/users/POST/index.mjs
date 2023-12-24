import db from "../../connection.mjs";
import express from "express";
import userModel from "../../schemas/user.model.mjs";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let newDocument = req.body;
    newDocument = new userModel(newDocument);
    const result = await collection.insertOne(newDocument);
    if (!result) throw new Error("Cannot create the user");
    res.send("User inserted successfully").status(201);
  } catch (e) {
    res.status(404).send(e);
  }
});
export default router;
