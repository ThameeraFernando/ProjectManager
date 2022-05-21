const express = require("express");
const router = express.Router();
const {
  login,
  register,
  updateUser,
} = require("../Controllers/authController");
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(updateUser);

module.exports = router;
