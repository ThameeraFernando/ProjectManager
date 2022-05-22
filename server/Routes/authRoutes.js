const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/auth");
const {
  login,
  register,
  updateUser,
} = require("../Controllers/authController");
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticateUser, updateUser);

module.exports = router;
