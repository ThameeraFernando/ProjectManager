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

const coSupervisorGetRequest = async (req, res) => {
  let { sid: supervisorEmail } = req.params;

  if (!supervisorEmail) {
    throw new BadRequestError("Please provide all values");
  }

  const request = await Request.find({ supervisorEmail });

  if (request.length <= 0) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "Group Request not found" });
  } else {
    res.status(StatusCodes.OK).json({ request });
  }
};

module.exports = {
  createCoRequest,
  coSupervisorGetRequest,
};
