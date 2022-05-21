const express = require("express");
const router = express.Router();
const {
  deleteUser,
  UpdateUser,
  getAllUsers,
} = require("../Controllers/userController");

router.route("/").get(getAllUsers);
router.route("/:id").patch(UpdateUser).delete(deleteUser);

module.exports = router;
