const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  fname: {
    type: String,
    maxlength: 10,
    required: true,
  },

  lname: {
    type: String,
    maxlength: 10,
  },

  email: {
    type: String,
    maxlength: 100,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  profession: {
    type: String,
    maxlength: 20,
    default: "student",
  },
});

module.exports = mongoose.model("User", dbSchema);
