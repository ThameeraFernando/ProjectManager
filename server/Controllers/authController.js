const User = require("../modal/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnAuthenticatedError } = require("../errors/index");
//login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  //check the request
  if (!email || !password) {
    throw new BadRequestError("Please provide all values.");
  }
  //check the user in database
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("invalid credentials");
  }
  //check the password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("invalid credentials");
  }
  //create a token and set password to undefine
  const token = user.createJWT();
  user.password = undefined;
  return res.status(StatusCodes.OK).json({ user, token });
};
//register controller
const register = async (req, res, next) => {
  const user = await User.create(req.body);
  const token = user.createJWT();
  return res.status(StatusCodes.OK).json({ user, token });
};
//update user controller
const updateUser = async (req, res) => {
  const { email, name, type } = req.body;
  if (!email || !name || !type) {
    throw new BadRequestError("Provide all values");
  }
  const user = await User.findOne({ _id: req.user.userID });
  user.email = email;
  user.name = name;
  user.type = type;
  await user.save();
  const token = user.createJWT();
  return res.status(StatusCodes.OK).json({ user, token });
};

module.exports = { login, register, updateUser };
