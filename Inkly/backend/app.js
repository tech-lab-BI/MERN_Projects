const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const appRouter = require("./router/appRouter");

const PORT = 3001;
const DB_PATH = "mongodb://root:abc@ac-hb1tzqd-shard-00-00.fhpqazo.mongodb.net:27017,ac-hb1tzqd-shard-00-01.fhpqazo.mongodb.net:27017,ac-hb1tzqd-shard-00-02.fhpqazo.mongodb.net:27017/Inkly?ssl=true&replicaSet=atlas-km16gb-shard-0&authSource=admin&appName=test"

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
