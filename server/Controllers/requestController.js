const Request = require("../modal/Request");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");

const createRequest = async (req, res) => {
  const { groupID, supervisorEmail, supervisorName, topic } = req.body;
  if (!groupID || !supervisorEmail || !topic || !supervisorName) {
    throw new BadRequestError("Please provide all values");
  }

  const gid = { id: groupID };
  // const request = await Request.find({ gid });

  // if (request.length >= 1) {
  //   res
  //     .status(StatusCodes.METHOD_NOT_ALLOWED)
  //     .json({ msg: "You cannot make more than 2 requests at a time" });
  // } else {
  const request = await Request.create(req.body);
  res.status(StatusCodes.CREATED).json({ request });
};

//topic update
const topicUpdate = async (req, res) => {
  const { groupID: Gid } = req.params;
  const { topic } = req.body;
  if (!Gid || !topic) {
    throw new BadRequestError("Please provide all values");
  }

  const groupsRequest = await Request.findOne({ groupID: Gid });

  groupsRequest.topic = topic;
  groupsRequest.status = "pending";

  await groupsRequest.save();

  res.status(StatusCodes.OK).json({ groupsRequest });
};

//topic update after by pannel member
const topicUpdatePannel = async (req, res) => {
  const { groupID: Gid } = req.params;
  const { topic } = req.body;
  if (!Gid || !topic) {
    throw new BadRequestError("Please provide all values");
  }

  const groupsRequest = await Request.findOne({ groupID: Gid });

  groupsRequest.topic = topic;

  await groupsRequest.save();

  res.status(StatusCodes.OK).json({ groupsRequest });
};

const studentGetRequest = async (req, res) => {
  let { gid: groupID } = req.params;

  if (!groupID) {
    throw new BadRequestError("Please provide all values");
  }
  const requestGroups = await Request.find({ groupID });

  // if (requestGroups.length <= 0) {
  //   res.status(StatusCodes.NOT_FOUND).json({ msg: "You have no requests" });
  // } else {

  res.status(StatusCodes.OK).json({ requestGroups });
  //}
};

//student
const getGroupDetails = async (req, res) => {
  let { gid: groupID } = req.params;
  if (!groupID) {
    throw new BadRequestError("Please provide all values");
  }
  const getGroups = await Request.find({ groupID });
  let rouStatus;
  if (getGroups) {
    rouStatus = true;
    res.status(StatusCodes.OK).json({ rouStatus });
  } else {
    rouStatus = false;
    res.status(StatusCodes.OK).json({ rouStatus });
  }
};

const supervisorGetRequest = async (req, res) => {
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

const UpdateRequest = async (req, res) => {
  const { id: rid } = req.params;
  const { status } = req.body;

  if (!status) {
    throw new BadRequestError("Please provide all values");
  }

  const request = await Request.findOne({ _id: rid });

  if (!request) {
    throw new NotFoundError(`No request with id :${rid}`);
  }

  const updateRequest = await Request.findOneAndUpdate({ _id: rid }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ updateRequest });
};

const deleteRequest = async (req, res) => {
  const { id: rid } = req.params;
  const request = await Request.findOne({ _id: rid });
  if (!request) {
    throw new NotFoundError();
  }
  await request.remove();
  return res.status(StatusCodes.OK).send({ msg: "Success! Request Removed" });
};

module.exports = {
  UpdateRequest,
  deleteRequest,
  createRequest,
  studentGetRequest,
  supervisorGetRequest,
  getGroupDetails,
  topicUpdate,
  topicUpdatePannel,
};
