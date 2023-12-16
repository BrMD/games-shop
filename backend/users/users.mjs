import mongoose from "mongoose";
import db from "../connection.mjs";
import express from "express";

const app = express();

app.get("/users", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({}).limit(50).toArray();

  res.send(results).status(200);
});

app.get("/:id", async (req, res) => {
  let collection = await db.collection("users");
  const id = new mongoose.Types.ObjectId(req.params.id.trim());
  console.log(id);
  let query = { _id: id };
  let result = await collection.findOne(query);
  if (!result) res.send("nao acho").status(404);
  else res.send("bateu aqui").status(200);
});

export default app;
