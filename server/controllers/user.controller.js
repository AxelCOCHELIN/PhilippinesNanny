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

module.exports.updateUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json({ message: `id ${req.params.id} is unknown.` });
  UserModel.updateOne(
    { _id: req.params.id },
    { $set: { bio: req.body.bio }, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "user has been modify" }))
    .catch((err) => res.status(400).json({ err }));
};

module.exports.deleteUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json({ message: `id ${req.params.id} is unknown.` });
  UserModel.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "user has been delete" }))
    .catch((err) => res.status(400).json({ err }));
};
