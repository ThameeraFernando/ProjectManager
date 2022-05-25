const express = require("express");
const router = express.Router();

const {
  groupRegister,
<<<<<<< HEAD
  getGroupRegister,
} = require("../Controllers/studentController");

router.route("/groupRegister").post(groupRegister);
router.route("/groupRegister/:email").get(getGroupRegister);
=======
  getAllStudentGroups,
} = require("../Controllers/studentController");

router.route("/groupRegister").post(groupRegister);
router.route("/").get(getAllStudentGroups);
>>>>>>> master
module.exports = router;
