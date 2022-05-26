const express = require("express");
const router = express.Router();

const {
  groupRegister,
  getGroupRegister,
  getAllStudentGroups,
  updateTopic,
} = require("../Controllers/studentController");

router.route("/groupRegister").post(groupRegister);
router.route("/groupRegister/:email").get(getGroupRegister);
router.route("/groupRegister/:groupID").patch(updateTopic);

router.route("/").get(getAllStudentGroups);
module.exports = router;
