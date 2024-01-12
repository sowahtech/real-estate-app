const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const harshedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: harshedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = signup;
