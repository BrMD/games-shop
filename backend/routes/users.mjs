import db from "../connection.mjs";
import express from "express";

const router = express.Router();
router.get("/users", async (req, res) => {
  try {
    const collection = await db.collection("users");
    console.log(collection);
    let results = await collection.find().toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("duroxus");
  }
});

export default router;
