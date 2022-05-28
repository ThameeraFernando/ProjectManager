const express = require("express");
const router = express.Router();
const {
  createCoRequest,
  studentGetCoRequest,
  coSupervisorGetRequest,
  coSupervisorUpdateRequest
} = require("../Controllers/coRequestController");

router.route("/").post(createCoRequest);
router.route("/:gid").get(studentGetCoRequest);
router.route("/cosupervisors/:sid").get(coSupervisorGetRequest);
router.route("/cosupervisors/:id").patch(coSupervisorUpdateRequest);

module.exports = router;
