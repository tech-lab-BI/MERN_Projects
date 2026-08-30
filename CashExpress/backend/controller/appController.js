const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const Transection = require("../model/transectionsModel");
function fetchAllData(req, res) {
  const userId = req.params.id;
  Transection.find({ userId }).then((data) => {
    res.json(data);
  });
}
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
    const err = validationResult(req);
    if (!err.isEmpty()) {
      const errMsg = err.array().map((e) => e.msg);

      return res.status(400).json({
        errors: errMsg,
      });
    }

    const { email, password } = req.body;

    User.findOne({ email }).then((user) => {
      if (!user) {
        return res.status(404).json({
          errors: ["User not exists! Create account"],
        });
      }
      bcrypt.compare(password, user.password).then((result) => {
        if (!result) {
          return res.status(401).json({
            errors: ["Incorrect Password"],
          });
        }
        const msg = {
          _id: user._id,
          name: user.name,
          email: user.email,
          dob: user.dob,
          profession: user.profession,
          income: user.income,
        };

        return res.json({ msg });
      });
    });
  },
];
const signin = [
  check("name").trim().isLength({ min: 3 }).withMessage("Name too small"),
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
    const err = validationResult(req);
    let errMsg = [];
    if (!err.isEmpty()) {
      errMsg = err.array().map((e) => e.msg);
      console.log("error present : ", err);
      return res.json({
        errors: errMsg,
      });
    }
    const { name, password, email, dob, profession, income } = req.body;
    User.findOne({ email }).then((user) => {
      if (user) {
        errMsg.push("This Email already used, Try another one");
        return res.status(409).json({
          errors: errMsg,
        });
      }
      bcrypt.hash(password, 10).then((hashPass) => {
        User.create({
          name,
          password: hashPass,
          email,
          dob,
          profession,
          income,
        }).then(() => {
          res.json({ message: "user saved" });
        });
      });
    });
  },
];
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
  Transection.deleteOne({ _id: transectionId }).then((result) => {
    console.log(result);
    let msg = "deleted successful";
    if (result.deletedCount === 0) {
      msg = "user not exists";
    }
    res.json({ message: msg });
  });
}

module.exports = { fetchAllData, signin, login, addData, deleteData, editData };
