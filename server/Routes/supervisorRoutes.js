const express = require("express");
const router = express.Router();
const {
  deleteSupervisor,
  UpdateSupervisor,
  getAllSupervisor,
  createSupervisor,
  getSpecificSupervisor,
  getCoSupervisors,
} = require("../Controllers/supervisorController");

router.route("/").post(createSupervisor);
router
  .route("/:id")
  .get(getSpecificSupervisor)
  .patch(UpdateSupervisor)
  .delete(deleteSupervisor);
// router.route("/cosupervisors/:type").get(getCoSupervisors);
router.route("/supervisorsdetails/details").get(getAllSupervisor);
// router.route("/supervisorsdetails/:type").get(getAllSupervisor); -test

module.exports = router;
