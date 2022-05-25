const express = require("express");
const router = express.Router();
const {
  deleteSupervisor,
  UpdateSupervisor,
  getAllSupervisor,
  createSupervisor,
  getSpecificSupervisor
} = require("../Controllers/supervisorController");

router.route("/").get(getAllSupervisor).post(createSupervisor);
router.route("/:id").get(getSpecificSupervisor).patch(UpdateSupervisor).delete(deleteSupervisor);

module.exports = router;