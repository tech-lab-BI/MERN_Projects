const { check, validationResult } = require("express-validator");
const User = require("../model/user_db");
const Note = require("../model/notes_db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = [
  check("email").isEmail().withMessage("Provide a valid email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/)
    .withMessage("Password should contain 1 uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password should contain 1 lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password should contain 1 number")
    .matches(/[!@#$%^&*]/)
    .withMessage("Password should contain 1 special character"),
  (req, res) => {
    let err = validationResult(req);
     // err.array() always returns an array. Even an empty array [] is truthy in JavaScript.
    if (!err.isEmpty()) {
      return res.json({ errMsg: err = err.array() });
    }
    const { email, password } = req.body;
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.json({ msg: "User not found" });
        }
        if (user.password === password) {
          const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
            expiresIn: "1d",
          });
          return res.json({ msg: "Login successful", user, token });
        }
        return res.json({ msg: "Wrong password" });
      })
      .catch(() => {
        res.status(500).json({ msg: "Server error" });
      });
  },
];

const signup = [
  check("fname").trim().isLength({ min: 3 }).withMessage("Name too small"),
  check("email").isEmail().withMessage("Provide a valid Email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/)
    .withMessage("Password should contain 1 uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password should contain 1 lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password should contain 1 number")
    .matches(/[!@#$%^&*]/)
    .withMessage("Password should contain 1 special character"),
  (req, res) => {
    let err = validationResult(req);
    if (!err.isEmpty()) {
      return res.json({ errMsg: err = err.array() });
    }
    const { fname, lname, email, password, profession } = req.body;
    User.find({email}).then((user) => {
      if (user) {
        return res.status(401).json({ msg: "User already exist" });
      }
      User.create({
        fname,
        lname,
        email,
        password,
        profession,
      })
        .then((user) => {
          return res.json({ msg: "Signup successful", user });
        })
        .catch((e) => {
          return res.status(500).json({ msg: "Signup failed", error: e.message });
        });
    });
  },
];

const logout = (req, res) => {
  console.log("log out");
};

const fetchNotes = (req, res) => {
  Note.find({ userId: req.userId })
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
};

const addNote = (req, res) => {
  const { id, title, date, description } = req.body;
  const userId = req.userId;

  if (id) {
    Note.findByIdAndUpdate(id, { title, date, description })
      .then((data) => {
        res.json({ msg: "Note updated", data });
      })
      .catch((err) => {
        res.status(500).json({ msg: err.message });
      });
  } else {
    Note.create({ userId, title, date, description })
      .then((data) => {
        res.json({ msg: "Note added", data });
      })
      .catch((err) => {
        res.status(500).json({ msg: err.message });
      });
  }
};

const deleteNote = (req, res) => {
  const noteId = req.params.id;

  Note.findByIdAndDelete(noteId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ msg: "Note not found" });
      }

      res.json({ msg: "Note deleted" });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
};

module.exports = { login, signup, logout, fetchNotes, addNote, deleteNote };
