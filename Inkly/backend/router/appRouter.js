const express = require("express");
const appRouter = express.Router();
const appController = require("../controllers/appController");
const authMiddleware = require("../middleware/authMiddleware");

appRouter.post("/", appController.login);
appRouter.post("/signup", appController.signup);
appRouter.delete("/logout", appController.logout);
appRouter.get("/getallnotes", authMiddleware, appController.fetchNotes);
appRouter.post("/addnote", authMiddleware, appController.addNote);
appRouter.delete("/deletenote/:id", authMiddleware, appController.deleteNote);

module.exports = appRouter;
