const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const errorHandler = require("../utils/error.js");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const harshedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: harshedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
