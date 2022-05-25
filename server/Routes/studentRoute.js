const express = require("express");
const router = express.Router();

const {
  groupRegister,
  getGroupRegister,
  getAllStudentGroups,
} = require("../Controllers/studentController");

router.route("/groupRegister").post(groupRegister);
router.route("/groupRegister/:email").get(getGroupRegister);

router.route("/groupRegister").post(groupRegister);
router.route("/").get(getAllStudentGroups);
module.exports = router;
