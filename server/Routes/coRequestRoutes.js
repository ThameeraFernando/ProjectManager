const express = require("express");
const router = express.Router();
const { createCoRequest } = require("../Controllers/requestController");

router.route("/").post(createCoRequest);

module.exports = router;
