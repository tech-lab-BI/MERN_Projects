//local module
const Todo = require("../model/todoSchema");

const getAllTask = (req, res) => {
  Todo.find().then((data) => {
    res.json(data);
  });
  // res.json({ message: "get all task" });
};
const addTask = (req, res) => {
  console.log(req.body);
  const { task, date } = req.body;
  const newTask = new Todo({
    task,
    date,
  });
  newTask.save().then(() => res.json({ newTask }));
};

const deleteTask = (req, res) => {
  const taskId = req.params.id;
  Todo.findByIdAndDelete(taskId).then(() => {
    res.json({ message: "task deleted" });
  });
};

const markComplete = (req, res) => {
  const taskId = req.params.id;
  Todo.findById(taskId).then((task) => {
    task.isComplete = !task.isComplete;
    task.save().then(() => {
      res.json({ message: "marked complete" });
    });
  });
};
const clearAll = (req, res) => {
  Todo.deleteMany({}).then(() => {
    res.json({ message: "all cleared" });
  });
};

module.exports = { addTask, deleteTask, getAllTask, markComplete, clearAll };
