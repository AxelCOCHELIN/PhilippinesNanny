const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.signUp);
router.get("/:id");

module.exports = router;
