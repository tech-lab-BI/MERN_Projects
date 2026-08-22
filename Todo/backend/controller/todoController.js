//local module
const Todo = require("../model/todoSchema");

const getAllTask = (req, res) => {
  Todo.find()
    .then((data) => {
      res.json(data);
    });
  // res.json({ message: "get all task" });
};
const addTask = (req, res) => {
  console.log(req.body);
  const { task, date, isComplete } = req.body;
  const newTask = new Todo({
    task,
    date,
    isComplete,
  });
  newTask.save().then(() => res.json({ message: "task added" }));
};
const deleteTask = (req, res) => {
  // const taskId = req.params.id;
  // Todo.finbyIdAndDelete(taskId);
  // Todo.save();
  res.json({ message: "task deleted" });
};

const markComplete = (req, res) => {
  // const taskId = req.params.id;
  // Todo.findById(taskId).then((task) => {
  //   task.isComplete = true;
  //   Todo.save();
  res.json({ message: "marked complete" });
  // });
};
const clearAll = (req, res) => {
  // Todo.clearAll();
  res.json({ message: "all cleared" });
};

module.exports = { addTask, deleteTask, getAllTask, markComplete, clearAll };
