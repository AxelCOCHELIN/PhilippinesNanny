const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

//auth
router.post("/register", authController.signUp);

//user
router.get("/:id", userController.getUser);

module.exports = router;
