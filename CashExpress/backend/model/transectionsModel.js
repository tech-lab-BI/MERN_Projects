const mongoose = require("mongoose");

const transectionsSchema = mongoose.Schema({
  userId: { type: String, required: true },
  type: { type: String, value: ["income", "expense"], default: "expense" },
  category: { type: String, default: "unknown" },
  description: String,
  amount: Number,
  date: String,
});

module.exports = mongoose.model("Transection", transectionsSchema);
