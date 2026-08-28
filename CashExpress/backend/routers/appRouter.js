const express = require('express');
const appRouter = express.Router();
const appController = require('../controller/appController');

appRouter.get("/home", appController.fetchAllData);
appRouter.post("/signin", appController.signin);
appRouter.post("/login", appController.login);
appRouter.post("/add-data", appController.addData);
appRouter.put("/edit-data/:id", appController.editData);
appRouter.delete("/delete-data/:id", appController.deleteData);

module.exports = appRouter;