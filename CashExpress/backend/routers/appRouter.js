const express = require("express");
const appRouter = express.Router();
const appController = require("../controller/appController");
const authMiddleware = require("../middleware/authMiddleware");

appRouter.get("/home/:id", authMiddleware, appController.fetchAllData);
appRouter.post("/signin", appController.signin);
appRouter.post("/login", appController.login);
appRouter.post("/add-data", authMiddleware, appController.addData);
appRouter.post("/edit-data/:id", authMiddleware, appController.editData);
appRouter.post("/delete-data/:id", authMiddleware, appController.deleteData);

module.exports = appRouter;
