const User = require("../model/userModel");
const Transection = require("../model/transectionsModel");
function fetchAllData(req, res) {
    Transection.find().then((data) => {
        res.json(data);
    })
}
function login(req, res) {
  const { email, password } = req.body;
  User.findOne({ email, password }).then((user) => {
    let msg = false;
    if (user) {
      msg = true;
    }
    res.json({ message: msg });
  });
}
function signin(req, res) {
  const { name, password, email, dob, profession, income } = req.body;
  User.create({ name, password, email, dob, profession, income }).then(() => {
    res.json({ message: "user saved" });
  });
}
function addData(req, res) {
  const { userId, type, category, description, amount, date } = req.body;
  Transection.create({
    userId,
    type,
    category,
    description,
    amount,
    date,
  }).then(() => {
    res.json({ meassage: "data saved" });
  });
}
function editData(req, res) {
  const transectionId = req.params.id;
  const { userId, type, category, description, amount, date } = req.body;
  Transection.findByIdAndUpdate(transectionId, {
    userId,
    type,
    category,
    description,
    amount,
    date,
  }).then((transection) => {
    let msg = "update successful";
    if (!transection) {
      msg = "transection not exists";
    }
    res.json({ message: msg });
  });
}
function deleteData(req, res) {
  const transectionId = req.params.id;
  Transection.deleteOne({_id : transectionId}).then((result) => {
    console.log(result);
    let msg = "deleted successful";
    if (result.deletedCount === 0) {
      msg = "user not exists";
    }
    res.json({ message: msg });
  })
}

module.exports = { fetchAllData, signin, login, addData, deleteData, editData };
