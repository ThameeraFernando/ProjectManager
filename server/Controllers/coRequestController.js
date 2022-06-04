const CoRequest = require("../modal/CoRequest");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");

const createCoRequest = async (req, res) => {
  const { groupID, coSupervisorEmail, coSupervisorName, topic } = req.body;
  if (!groupID || !coSupervisorEmail || !topic || !coSupervisorName) {
    throw new BadRequestError("Please provide all values");
  }

  const gid = { id: groupID };

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

  res.status(StatusCodes.OK).json({ requestCoGroups });
  //}
};

//co-supervisor get group request
const coSupervisorGetRequest = async (req, res) => {
  let { sid: coSupervisorEmail } = req.params;

  if (!coSupervisorEmail) {
    throw new BadRequestError("Please provide all values");
  }

  const request = await CoRequest.find({ coSupervisorEmail });

  if (request.length <= 0) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "Group Request not found" });
  } else {
    res.status(StatusCodes.OK).json({ request });
  }
};

const coSupervisorUpdateRequest = async (req, res) => {
  const { id: rid } = req.params;
  const { status } = req.body;

  if (!status) {
    throw new BadRequestError("Please provide all values");
  }

  const request = await CoRequest.findOne({ _id: rid });

  if (!request) {
    throw new NotFoundError(`No request with id :${rid}`);
  }

  const updateRequest = await CoRequest.findOneAndUpdate(
    { _id: rid },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ updateRequest });
};

//topic update after by pannel member
const topicUpdatePannelCo = async (req, res) => {
  const { groupID: Gid } = req.params;
  const { topic } = req.body;
  if (!Gid || !topic) {
    throw new BadRequestError("Please provide all values");
  }

  const groupsRequest = await CoRequest.findOne({ groupID: Gid });

  groupsRequest.topic = topic;

  await groupsRequest.save();

  res.status(StatusCodes.OK).json({ groupsRequest });
};

module.exports = {
  createCoRequest,
  studentGetCoRequest,
  coSupervisorGetRequest,
  coSupervisorUpdateRequest,
  topicUpdatePannelCo,
};
