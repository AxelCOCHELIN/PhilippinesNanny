const mongoose = require("mongoose");
const { isEmail } = require("validator");
const { isBoolean } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 512,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    bio: {
      type: String,
      maxlength: 1024,
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    isCandidate: {
      type: String,
      required: true,
      validate: [isBoolean],
    },
  },
  {
    timestamps: true,
  }
);

// play function before save into db
userSchema.pre("save", async function (next) {
  const saltPassword = await bcrypt.genSalt();
  const saltEmail = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, saltPassword);
  this.email = await bcrypt.hash(this.email, saltEmail);
  next;
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
