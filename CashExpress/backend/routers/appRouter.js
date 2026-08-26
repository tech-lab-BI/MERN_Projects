const express = require('express');
const appRouter = express.Router();
const appController = require('../controller/appController');

appRouter.get("/", appController.fetchAllData);

module.exports = appRouter;