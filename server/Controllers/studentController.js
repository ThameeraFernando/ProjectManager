const Groups = require("../modal/StudentGroup");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");

const groupRegister = async (req, res) => {
  const {
    groupID,
    itNumOne,
    itNumTwo,
    itNumThree,
    itNumFour,
    emailOne,
    emailTwo,
    emailThree,
    emailFour,
    supervisor,
    coSupervisor,
    topic,
  } = req.body;

  if (
    !groupID ||
    !itNumOne ||
    !itNumTwo ||
    !itNumThree ||
    !itNumFour ||
    !emailOne ||
    !emailTwo ||
    !emailThree ||
    !emailFour ||
    !supervisor ||
    !coSupervisor ||
    !topic
  ) {
    throw new BadRequestError("Please provide all values");
  }

  const studentGroup = await Groups.create(req.body);
  res.status(StatusCodes.CREATED).json({ studentGroup });
};

const getGroupRegister = async (req, res) => {
  const { email: newemail } = req.params;
  const groups = await Groups.findOne({
    $or: [
      { emailOne: newemail },
      { emailTwo: newemail },
      { emailThree: newemail },
      { emailFour: newemail },
    ],
  });

  res.status(StatusCodes.OK).json(groups);
};

const getAllStudentGroups = async (req, res) => {
  const studentgroups = await Groups.find({});
  res.status(StatusCodes.OK).json(studentgroups);
};

const updateTopic = async (req, res) => {
  const { groupID: Gid } = req.params;
  const { topic } = req.body;

  if (!Gid || !topic) {
    throw new BadRequestError("Please provide all values");
  }

  const groups = await Groups.findOne({ groupID: Gid });

  groups.topic = topic;

  await groups.save();

  res.status(StatusCodes.OK).json({ groups });
};

module.exports = {
  groupRegister,
  getAllStudentGroups,
  getGroupRegister,
  updateTopic,
};
