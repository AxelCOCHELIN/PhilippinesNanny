const UserModel = require("../models/user.model");

module.exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    const user = await UserModel.create({ username, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(400).json({ err });
  }
};