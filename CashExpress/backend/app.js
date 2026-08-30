const express = require("express");
const cors = require("cors");
const appRouter = require("./routers/appRouter");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(appRouter);

mongoose.connect(process.env.DB_PATH).then(() => {
  app.listen(PORT, () => {
    console.log("SERVER START >>>>>");
  });
});
