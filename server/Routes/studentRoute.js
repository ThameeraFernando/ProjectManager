const express = require("express");
const router = express.Router();

const {
  groupRegister,
  getGroupRegister,
} = require("../Controllers/studentController");

router.route("/groupRegister").post(groupRegister);
router.route("/groupRegister/:email").get(getGroupRegister);
module.exports = router;
