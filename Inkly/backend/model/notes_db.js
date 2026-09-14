const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    maxlength: 20,
    required: true,
  },

  date: {
    type: Date,
  },

  description: {
    type: String,
  },
});

module.exports = mongoose.model("Note", dbSchema);
