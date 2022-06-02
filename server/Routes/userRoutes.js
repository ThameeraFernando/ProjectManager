const express = require("express");
const router = express.Router();
const {
  deleteUser,
  UpdateUser,
  getAllUsers,
  UpdateGroup,
} = require("../Controllers/userController");

router.route("/").get(getAllUsers);
router.route("/:id").patch(UpdateUser).delete(deleteUser);
router.route("/studentGroup/:id").patch(UpdateGroup);

module.exports = router;
