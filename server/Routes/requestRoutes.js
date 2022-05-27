const express = require("express");
const router = express.Router();
const {
  deleteRequest,
  UpdateRequest,
  createRequest,
  studentGetRequest,
  supervisorGetRequest,
  getGroupDetails,
  topicUpdate,
} = require("../Controllers/requestController");

router.route("/").post(createRequest);
router.route("/:id").patch(UpdateRequest).delete(deleteRequest);
router.route("/supervisors/:sid").get(supervisorGetRequest);
router.route("/:gid").get(studentGetRequest);
router.route("/groupdetails/:gid").get(getGroupDetails);
router.route("/groupRegister/:groupID").patch(topicUpdate);

module.exports = router;
