const Supervisor = require("../modal/Supervisor");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");
const Request = require('../modal/Request');

const createSupervisor = async (req, res) => {

    const {name,email,field,userId} = req.body 

    if(!name || !email || !field || !userId){
        throw new BadRequestError('Please provide all values')
    }

    const uid = userId
    const supervisor = await Supervisor.find({userId:uid});

    if (supervisor) {
        if(supervisor.length >= 1){
            res.status(StatusCodes.METHOD_NOT_ALLOWED).json({msg:'You cannot supervise more than 1 groups'});
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
    let {id} = req.params;
    // console.log(id);
    
    if(!id){
        
        throw new BadRequestError('Please provide all values')
    }

    const supervisor = await Supervisor.find({userId:id});
    
    if(!supervisor){
        res.status(StatusCodes.NOT_FOUND).json({msg:'Supervisors not found'});  
    }
    res.status(StatusCodes.OK).json(supervisor);
};

const UpdateSupervisor = async (req, res) => {

    const { id: sid } = req.params;
    const {name,email,field,type} = req.body 
    
    if(!type || !field ){
        throw new BadRequestError('Please provide all values')
    }

    const supervise = await Supervisor.findOne({_id:sid})

    if(!supervise){
        throw new NotFoundError(`No supervisor with id :${sid}`)
    }
    
    const updateSupervise = await Supervisor.findOneAndUpdate({_id:sid},req.body,{
        new: true,
        runValidators:true
    })

    res.status(StatusCodes.OK).json({updateSupervise})

};

const deleteSupervisor = async (req, res) => {
    const { id: sid } = req.params;
    const supervisor = await Supervisor.findOne({ _id: sid });
    if (!supervisor) {
        throw new NotFoundError();
    }else{
        const email = supervisor.email;
        // console.log(email);
        const isRequested = await Request.find({supervisorEmail:email}) 
        // console.log(isRequested);    
        if(isRequested.length>0){
            return res.status(StatusCodes.METHOD_NOT_ALLOWED).send({ msg: "You are requested!" });
        }else{
            await supervisor.remove();
            return res.status(StatusCodes.OK).send({ msg: "Success! Supervisor Removed" });
        }
    } 
};
  
module.exports = { getAllSupervisor, UpdateSupervisor, deleteSupervisor, createSupervisor, getSpecificSupervisor };