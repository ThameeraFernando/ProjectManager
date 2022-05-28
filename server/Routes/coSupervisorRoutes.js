const express = require("express");
const router = express.Router();
const {
  deleteCoSupervisor,
  UpdateCoSupervisor,
  getAllCoSupervisor,
  createCoSupervisor,
  getSpecificCoSupervisor,
} = require("../Controllers/coSupervisorController");

router.route("/").post(createCoSupervisor);
router
  .route("/:id")
  .get(getSpecificCoSupervisor)
  .patch(UpdateCoSupervisor)
  .delete(deleteCoSupervisor);
router.route("/cosupervisorsdetails/:type").get(getAllCoSupervisor);

module.exports = router;
