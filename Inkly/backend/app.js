const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors')
const appRouter = require("./router/appRouter");

const PORT = process.env.PORT;
const DB_PATH = process.env.DB_PATH;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(appRouter);

mongoose.connect(DB_PATH).then(() => {
  app.listen(PORT, () => {
    console.log("SERVER START .....");
  });
});
