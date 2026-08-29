const express = require('express');
const appRouter = express.Router();
const appController = require('../controller/appController');

appRouter.get("/home/:id", appController.fetchAllData);
appRouter.post("/signin", appController.signin);
appRouter.post("/login", appController.login);
appRouter.post("/add-data", appController.addData);
appRouter.post("/edit-data/:id", appController.editData);
appRouter.post("/delete-data/:id", appController.deleteData);

module.exports = appRouter;