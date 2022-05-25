const Request = require("../modal/Request");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");

const createRequest = async (req, res) => {

    const {groupID,supervisorEmail,topic} = req.body 

    if(!groupID || !supervisorEmail || !topic ){
        throw new BadRequestError('Please provide all values')
    }

    const gid = {id:groupID}
    const request = await Request.find({gid});

    if (request.length>=1) {
        res.status(StatusCodes.METHOD_NOT_ALLOWED).json({msg:'You cannot make more than 2 requests at a time'});       
    }else{
        const request = await Request.create(req.body);
        res.status(StatusCodes.CREATED).json({request});
    }
    
};

const studentGetRequest = async (req, res) => {

    let {gid:groupID} = req.params;
    
    if(!groupID){
        throw new BadRequestError('Please provide all values')
    }
    const request = await Request.find({groupID});
    
    if(request.length<=0){
        res.status(StatusCodes.NOT_FOUND).json({msg:'You have no requests'});  
    }else{
        res.status(StatusCodes.OK).json({request});
    }
    
};

const supervisorGetRequest = async (req, res) => {

    let {sid:supervisorEmail} = req.params;
    
    if(!supervisorEmail){
        throw new BadRequestError('Please provide all values')
    }

    const request = await Request.find({supervisorEmail});
    
    if(request.length<=0){
        res.status(StatusCodes.NOT_FOUND).json({msg:'Group Request not found'});  
    }else{
        res.status(StatusCodes.OK).json({request});
    }
    
};

const UpdateRequest = async (req, res) => {
   
    const {id:rid} = req.params
    const {status}=req.body
    
    if(!status){
        throw new BadRequestError('Please provide all values')
    }

    const request = await Request.findOne({_id:rid})

    if(!request){
        throw new NotFoundError(`No request with id :${rid}`)
    }
     
    const updateRequest = await Request.findOneAndUpdate({_id:rid},req.body,{
        new: true,
        runValidators:true
    })
    res.status(StatusCodes.OK).json({updateRequest})

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
  
module.exports = {UpdateRequest, deleteRequest, createRequest, studentGetRequest, supervisorGetRequest };