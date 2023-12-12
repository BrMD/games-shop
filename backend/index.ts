import express from "express";
import { router } from "./src/routes/index";

const app = express();
const port = process.env.port || 5000;

app.use(router);

app.listen(port, () => {
  console.log("==== SERVER START ====");
});
