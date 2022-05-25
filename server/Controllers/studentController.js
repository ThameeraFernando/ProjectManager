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
  } = req.body;

  console.log(req.body);

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
    !coSupervisor
  ) {
    throw new BadRequestError("Please provide all values");
  }

  const studentGroup = await Groups.create(req.body);
  res.status(StatusCodes.CREATED).json({ studentGroup });
};

const getGroupRegister = async (req, res) => {
  const { email: email } = req.params;
  const groups = await Groups.findOne({
    $or: [
      { emailOne: email },
      { emailTwo: email },
      { emailThree: email },
      { emailFour: email },
    ],
  });

  res.status(StatusCodes.OK).json(groups);
  console.log(groups);
};

const getAllStudentGroups = async (req, res) => {
  const studentgroups = await Groups.find({});
  res.status(StatusCodes.OK).json(studentgroups);
};

module.exports = { groupRegister, getAllStudentGroups, getGroupRegister };
