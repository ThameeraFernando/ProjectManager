const express = require("express");
const router = express.Router();

const {
  groupRegister,
  getGroupRegister,
  getAllStudentGroups,
  updateTopic,
  updateSupervisor,
  getSupervisorGroup,
  updateCoSupervisor,
  getCoSupervisorGroup,
  getEvaluationGroup,
  evaluateGroup

} = require("../Controllers/studentController");

router.route("/groupRegister").post(groupRegister);
router.route("/groupRegister/:email").get(getGroupRegister);
router.route("/groupRegister/:groupID").patch(updateTopic);

//dilupa
router.route("/groupSupervisor/:groupID").patch(updateSupervisor).get(getSupervisorGroup);
router.route("/groupCoSupervisor/:groupID").patch(updateCoSupervisor).get(getCoSupervisorGroup);

// panel member
router.route("/panelMember/:panelMemberEmail").patch(evaluateGroup).get(getEvaluationGroup);


router.route("/").get(getAllStudentGroups);
module.exports = router;