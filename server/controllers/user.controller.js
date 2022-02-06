const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.getUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json({ message: `id ${req.params.id} is unknown.` });
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.json(docs);
    else console.log("something went wrong" + err);
  }).select("-password");
};
