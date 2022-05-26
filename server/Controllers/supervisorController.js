const Supervisor = require("../modal/Supervisor");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");

const createSupervisor = async (req, res) => {

    const {name,email,field,userId} = req.body 

    if(!name || !email || !field || !userId){
        throw new BadRequestError('Please provide all values')
    }

    const uid = {id:userId}
    const supervisor = await Supervisor.find({uid});

    if (supervisor) {
        if(supervisor.length >= 2){
            res.status(StatusCodes.METHOD_NOT_ALLOWED).json({msg:'You cannot supervise more than 2 groups'});
        }else{
            const supervisor = await Supervisor.create(req.body);
            res.status(StatusCodes.CREATED).json({supervisor});
        }
    }else{
        const supervisor = await Supervisor.create(req.body);
        res.status(StatusCodes.CREATED).json({supervisor});
    }
    
    
};

const getAllSupervisor = async (req, res) => {
    const supervisors = await Supervisor.find();
    res.status(StatusCodes.OK).json({supervisors, totalSupervisors:supervisors.length});
};

const getSpecificSupervisor = async (req, res) => {
    let uid = req.params;
    console.log(uid);
    
    if(!uid){
        
        throw new BadRequestError('Please provide all values')
    }

    const supervisor = await Supervisor.find({uid});
    
    if(!supervisor){
        res.status(StatusCodes.NOT_FOUND).json({msg:'Supervisors not found'});  
    }
    res.status(StatusCodes.OK).json({supervisor});
};

const UpdateSupervisor = async (req, res) => {

    res.status(200).send('update supervisor');

};

const deleteSupervisor = async (req, res) => {
    const { id: sid } = req.params;
  const supervisor = await Supervisor.findOne({ _id: sid });
  if (!supervisor) {
    throw new NotFoundError();
  }
  //check permissions

  await supervisor.remove();
  return res.status(StatusCodes.OK).send({ msg: "Success! Supervisor Removed" });
};
  //
module.exports = { getAllSupervisor, UpdateSupervisor, deleteSupervisor, createSupervisor, getSpecificSupervisor };