const User = require("../model/user_db");
const Note = require("../model/notes_db");

const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.json({ msg: "User not found" });
      }
      if (user.password === password) {
        return res.json({ msg: "Login successful" });
      }
      return res.json({ msg: "Wrong password" });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Server error" });
    });
};

const signup = (req, res) => {
  const { fname, lname, email, password, profession } = req.body;
  User.create({
    fname,
    lname,
    email,
    password,
    profession,
  })
    .then((user) => {
      res.json({ msg: "Signup successful", user });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Signup failed", error: err.message });
    });
};

const logout = (req, res) => {
  console.log("log out");
};

const fetchNotes = (req, res) => {
  Note.find()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
};

const addNote = (req, res) => {
  const { title, date, description } = req.body;

  Note.create({ title, date, description })
    .then((data) => {
      res.json({ msg: "Note added", data });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
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
