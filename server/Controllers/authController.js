const User = require("../modal/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors/index");
//login controller
const login = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: "login controller" });
};
//register controller
const register = async (req, res, next) => {
  const user = await User.create(req.body);
  const token = user.createJWT();
  return res.status(StatusCodes.OK).json({ user, token });
};
//update user controller
const updateUser = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: "updateUser controller" });
};

module.exports = { login, register, updateUser };
