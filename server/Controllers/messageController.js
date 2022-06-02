const Message = require("../modal/Message");
const Groups = require("../modal/StudentGroup");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");

const sendMessage = async (req, res) => {
  const { sender , message, group } = req.body;
  if (!sender || !message || !group ) {
    throw new BadRequestError("Please provide all values");
  }
  
  const hasgroup = await Groups.find({groupID:group});

  if(hasgroup.length === 0){
    throw new BadRequestError("Group not found!");
  }else{
    const msg = await Message.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg });
  }
  
};

const getMessages = async (req, res) => {
    const { group: grp } = req.params;

    if (!grp ) {
        throw new BadRequestError("Please provide all values");
      }
  
    const messages = await Message.find({ group: grp });
    res.status(StatusCodes.OK).json({messages});
};


module.exports = {
    sendMessage,
    getMessages
};
