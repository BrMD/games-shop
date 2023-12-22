import db from "../connection.mjs";
import express from "express";
import GetSingleGame from "./GETsingleGame/index.mjs";
import PostGame from "./POST/index.mjs";
import DeleteGame from "./DELETE/index.mjs";
import UpdateGame from "./PATCH/index.mjs";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let collection = await db.collection("games");
    let results = await collection.find({}).limit(50).toArray();
    if (!results) throw new Error("Cannot find games");
    res.send(results).status(200);
  } catch (e) {
    res.send(e).status(404);
  }
});

router.get("/:id", GetSingleGame);
router.post("/", PostGame);
router.delete("/:id", DeleteGame);
router.patch("/:id", UpdateGame);
export default router;
