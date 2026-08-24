//external module
const express = require("express");
const todoRouter = express.Router();
//local module
const todoController = require("../controller/todoController.js");

todoRouter.get("/getalltask", todoController.getAllTask);
todoRouter.post("/add", todoController.addTask);
todoRouter.post("/delete/:id", todoController.deleteTask);
todoRouter.post("/markcomplete/:id", todoController.markComplete);
todoRouter.post("/clearall", todoController.clearAll);

module.exports = todoRouter;
