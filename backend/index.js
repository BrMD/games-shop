import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import users from "./users/users.mjs";
import bodyParser from "body-parser";

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Load the /posts routes

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});
// app.use("/", (req, res) => {
//   res.send("bateu no /");
// });
app.use("/users", users);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
