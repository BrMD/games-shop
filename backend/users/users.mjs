import db from "../connection.mjs";
import express from "express";
import GetSingleUser from "./GETsingleUser/index.mjs";
import PostUser from "./POST/index.mjs";
import DeleteUser from "./DELETE/index.mjs";
import UpdateUser from "./PATCH/index.mjs";
const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({}).limit(50).toArray();

  res.send(results).status(200);
});

router.get("/:id", GetSingleUser);
router.post("/", PostUser);
router.delete("/:id", DeleteUser);
router.patch("/:id", UpdateUser);
export default router;
