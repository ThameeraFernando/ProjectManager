const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMessages,
} = require("../Controllers/messageController");

router.route("/").post(sendMessage);
router.route("/:group").get(getMessages)


module.exports = router;
