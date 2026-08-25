//external module
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//local module
const todoRouter = require("./router/todoRouter");

require("dotenv").config();

const dbPath = process.env.DB_PATH;
const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(todoRouter);

app.get("/data", (req, res, next) => {
  console.log("hi");
  res.json({ name: "Isan" });
});

mongoose
  .connect(dbPath)
  .then(() => {
    app.listen(PORT, (err) => {
      if (!err) {
        console.log("SERVER RUNNING >>>>>>");
      } else {
        console.log("Errer at server running : ", err);
      }
    });
  })
  .catch((e) => console.log("Error in db connection : ", e));
