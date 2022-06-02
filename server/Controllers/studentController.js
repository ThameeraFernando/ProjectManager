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

//by supervisor
const updateSupervisor = async (req, res) => {
  const { groupID: Gid } = req.params;
  const { supervisor } = req.body;
  // console.log(supervisor);

  if (!Gid || !supervisor) {
    throw new BadRequestError("Please provide all values");
  }

  const groups = await Groups.findOne({ groupID: Gid });

  groups.supervisor = supervisor;

  await groups.save();

  res.status(StatusCodes.OK).json({ groups });
};

//by Supervisor
const getSupervisorGroup = async (req,res)=>{
  const { groupID:supervisor } = req.params;
 
  console.log(supervisor);

  if (!supervisor) {
    throw new BadRequestError("Please provide all values");
  }

  const group = await Groups.findOne({ supervisor: supervisor });

  res.status(StatusCodes.OK).json({ group });
}

//by Panel Member
const getEvaluationGroup = async (req,res)=>{
  const { panelMemberEmail} = req.params;

  if (!panelMemberEmail) {
    throw new BadRequestError("Please provide all values");
  }

  const group = await Groups.findOne({ panelMemberEmail });

  res.status(StatusCodes.OK).json({ group });
}

//by panel member
const evaluateGroup = async (req, res) => {
  const { panelMemberEmail: Gid } = req.params;
  const { panelTopicEvaluation } = req.body;

  if (!Gid) {
    throw new BadRequestError("Please provide all values");
  }

  const grp = await Groups.find({ groupID: Gid  });

  if (!grp) {
    throw new NotFoundError(`No group with name :${Gid}`);
  }

  const group = await Groups.findOneAndUpdate({ groupID: Gid }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ group });
};

//by co-supervisor
const updateCoSupervisor = async (req, res) => {
  const { groupID: Gid } = req.params;
  const { cosupervisor } = req.body; // by frontend supervisor or cosupervisor 
  // console.log(supervisor);

  if (!Gid || !cosupervisor) {
    throw new BadRequestError("Please provide all values");
  }

  const groups = await Groups.findOne({ groupID: Gid });

  groups.coSupervisor = cosupervisor;

  await groups.save();

  res.status(StatusCodes.OK).json({ groups });
};

//by co-Supervisor
const getCoSupervisorGroup = async (req,res)=>{
  const { groupID:supervisor } = req.params;
 
  // console.log(supervisor);

  if (!supervisor) {
    throw new BadRequestError("Please provide all values");
  }

  const group = await Groups.findOne({ coSupervisor: supervisor });

  res.status(StatusCodes.OK).json({ group });
}

module.exports = {
  groupRegister,
  getAllStudentGroups,
  getGroupRegister,
  updateTopic,
  updateSupervisor,
  getSupervisorGroup,
  getCoSupervisorGroup,
  updateCoSupervisor,
  getEvaluationGroup,
  evaluateGroup
};
