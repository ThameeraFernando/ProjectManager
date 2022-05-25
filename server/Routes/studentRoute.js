const express = require("express");
const router = express.Router();

const { groupRegister } = require("../Controllers/studentController");

router.route("/groupRegister").post(groupRegister);

module.exports = router;
