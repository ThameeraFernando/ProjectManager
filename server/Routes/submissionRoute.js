const express = require("express");
const Sub = require("../modal/Submission");
const router = express.Router();
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

//get all
router.get("/", async (req, res) => {
  const subs = await Sub.find({});
  res.status(StatusCodes.OK).json(subs);
});
//create a submission
router.post("/", async (req, res) => {
  const { submittedBy, dueDate, submittedTo, description } = req.body;
  console.log(req.body);
  if (!submittedBy || !dueDate || !submittedTo || !description) {
    throw new BadRequestError("Please enter all values.");
  }
  const subs = await Sub.create(req.body);
  res.status(StatusCodes.CREATED).json(subs);
});
//delete a submission
router.delete("/:id", async (req, res) => {
  const { id: sid } = req.params;
  const sub = await Sub.findOne({ _id: sid.toString() });
  if (!sub) {
    throw new NotFoundError("Submission not found.");
  }
  await Sub.findOneAndDelete({ _id: sid });
  res.status(200).json({ msg: "delete successful" });
});
module.exports = router;
