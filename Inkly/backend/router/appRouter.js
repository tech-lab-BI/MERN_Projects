const express = require('express');
const appRouter = express.Router();
const appController = require("../controllers/appController");

appRouter.post("/", appController.login);
appRouter.post("/signup", appController.signup);
appRouter.delete("/logout", appController.logout);
appRouter.get("/getallnotes", appController.fetchNotes);
appRouter.post("/addnote", appController.addNote);
appRouter.delete("/deletenote/:id", appController.deleteNote);

module.exports = appRouter;