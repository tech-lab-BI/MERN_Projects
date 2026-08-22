//external module
const { mongoose } = require("mongoose");
const todoSchema = mongoose.Schema({
  task: { type: String, required: true },
  date: { type: Date },
  isComplete: { type: Boolean, default: false },
});

const Todo = mongoose.model("TodoItems", todoSchema);
module.exports = Todo;