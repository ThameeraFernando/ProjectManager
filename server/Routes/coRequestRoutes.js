const express = require("express");
const router = express.Router();
const {
  createCoRequest,
  studentGetCoRequest,
} = require("../Controllers/coRequestController");

router.route("/").post(createCoRequest);
router.route("/:gid").get(studentGetCoRequest);

module.exports = router;
