const express = require("express");
const router = express.Router();
const {
  createCoRequest,
  studentGetCoRequest,
  coSupervisorGetRequest,
  coSupervisorUpdateRequest,
  topicUpdatePannelCo,
} = require("../Controllers/coRequestController");

router.route("/").post(createCoRequest);
router.route("/:gid").get(studentGetCoRequest);
router.route("/cosupervisors/:sid").get(coSupervisorGetRequest);
router.route("/cosupervisors/:id").patch(coSupervisorUpdateRequest);
router.route("/panneltopicup/:groupID").patch(topicUpdatePannelCo);

module.exports = router;
