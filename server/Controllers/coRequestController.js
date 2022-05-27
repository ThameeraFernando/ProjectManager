const CoRequest = require("../modal/CoRequest");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");

const createCoRequest = async (req, res) => {
  const { groupID, coSupervisorEmail, coSupervisorName, topic } = req.body;
  if (!groupID || !coSupervisorEmail || !topic || !coSupervisorName) {
    throw new BadRequestError("Please provide all values");
  }

  const gid = { id: groupID };
  // const request = await Request.find({ gid });

  // if (request.length >= 1) {
  //   res
  //     .status(StatusCodes.METHOD_NOT_ALLOWED)
  //     .json({ msg: "You cannot make more than 2 requests at a time" });
  // } else {
  const corequest = await CoRequest.create(req.body);
  res.status(StatusCodes.CREATED).json({ corequest });
};

//get student co-supervisor group
const studentGetCoRequest = async (req, res) => {
  let { gid: groupID } = req.params;

  if (!groupID) {
    throw new BadRequestError("Please provide all values");
  }
  const requestCoGroups = await CoRequest.find({ groupID });

  // if (requestGroups.length <= 0) {
  //   res.status(StatusCodes.NOT_FOUND).json({ msg: "You have no requests" });
  // } else {

  res.status(StatusCodes.OK).json({ requestCoGroups });
  //}
};

module.exports = {
  createCoRequest,
  studentGetCoRequest,
};
