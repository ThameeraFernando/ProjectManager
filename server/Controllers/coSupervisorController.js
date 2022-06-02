const CoSupervisor = require("../modal/CoSupervisor");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");
const CoRequest = require("../modal/CoRequest");

// meka thami elakiri wage wada eka
//poornage part eka naa habai

const createCoSupervisor = async (req, res) => {
  const { name, email, field, userId } = req.body;

  if (!name || !email || !field || !userId) {
    throw new BadRequestError("Please provide all values");
  }

  const uid = userId;
  const cosupervisor = await CoSupervisor.find({ userId: uid });

  if (cosupervisor) {
    if (cosupervisor.length >= 1) {
      res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .json({ msg: "You cannot supervise more than 1 groups" });
    } else {
      const cosupervisor = await CoSupervisor.create(req.body);
      res.status(StatusCodes.CREATED).json({ cosupervisor });
    }
  } else {
    const cosupervisor = await CoSupervisor.create(req.body);
    res.status(StatusCodes.CREATED).json({ cosupervisor });
  }
};

//student
const getAllCoSupervisor = async (req, res) => {
  // const { type: worktype } = req.params;
  // const coSupervisors = await CoSupervisor.find({});
  // res
  //   .status(StatusCodes.OK)
  //   .json({ coSupervisors, totalCoSupervisors: coSupervisors.length });

  const { search, availability, sort } = req.query;

  const qobject = {};

  if (availability && availability !== "all") {
    qobject.availability = availability;
  }

  if (search) {
    qobject.field = { $regex: search, $options: "i" };
  }

  let qresult = CoSupervisor.find(qobject);

  if (sort === "a-z") {
    qresult = qresult.sort("name");
  }

  if (sort === "z-a") {
    qresult = qresult.sort("-name");
  }

  const coSupervisors = await qresult;

  res

    .status(StatusCodes.OK)

    .json({ coSupervisors, totalCoSupervisors: coSupervisors.length });
};

const getSpecificCoSupervisor = async (req, res) => {
  let { id } = req.params;
  // console.log(id);

  if (!id) {
    throw new BadRequestError("Please provide all values");
  }

  const cosupervisor = await CoSupervisor.find({ userId: id });

  if (!cosupervisor) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "Co-Supervisors not found" });
  }
  res.status(StatusCodes.OK).json(cosupervisor);
};

const UpdateCoSupervisor = async (req, res) => {
  // const { id: sid } = req.params;
  // const { name, email, field, type } = req.body;

  const { id: sid } = req.params;
  const { name, email, field, type, count, availability } = req.body;

  // if(!type || !field ){
  //     throw new BadRequestError('Please provide all values')
  // }

  const cosupervise = await CoSupervisor.findOne({ _id: sid });

  if (!cosupervise) {
    throw new NotFoundError(`No Co-supervisor with id :${sid}`);
  }

  const isRequested = await CoRequest.find({ coSupervisorEmail: email });
  // console.log(isRequested);
  if (isRequested.length > 0) {
    return res
      .status(StatusCodes.METHOD_NOT_ALLOWED)
      .send({ msg: "You are requested!" });
  } else {
    const updateCoSupervise = await CoSupervisor.findOneAndUpdate(
      { _id: sid },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(StatusCodes.OK).json({ updateCoSupervise });
  }
};

const deleteCoSupervisor = async (req, res) => {
  const { id: sid } = req.params;
  const cosupervisor = await CoSupervisor.findOne({ _id: sid });
  if (!cosupervisor) {
    throw new NotFoundError();
  } else {
    const email = cosupervisor.email;
    // console.log(email);
    const isRequested = await CoRequest.find({ coSupervisorEmail: email });
    // console.log(isRequested);
    if (isRequested.length > 0) {
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .send({ msg: "You are requested!" });
    } else {
      await cosupervisor.remove();
      return res
        .status(StatusCodes.OK)
        .send({ msg: "Success! Co-Supervisor Removed" });
    }
  }
};

// //get core supervisors to the student page

// const getCoSupervisors = async (req, res) => {
//   const { type: worktype } = req.params;

//   const coSupervisors = await Supervisor.find({ type: worktype });

//   if (!coSupervisors) {
//     throw new NotFoundError();
//   }

//   res

//     .status(StatusCodes.OK)

//     .json({ coSupervisors, totalCoSupervisors: coSupervisors.length });
// };

module.exports = {
  getAllCoSupervisor,
  UpdateCoSupervisor,
  deleteCoSupervisor,
  createCoSupervisor,
  getSpecificCoSupervisor,
};
