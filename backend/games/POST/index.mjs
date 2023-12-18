import db from "../../connection.mjs";
import express from "express";
import gameModel from "../../schemas/game.model.mjs";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let collection = await db.collection("games");
    let newDocument = req.body;
    newDocument = new gameModel(newDocument);
    const result = await collection.insertOne(newDocument);
    if (!result) throw new Error("Cannot create the game");
    res.send(req.body).status(201);
  } catch (e) {
    res.status(404).send(e);
  }
});
export default router;
