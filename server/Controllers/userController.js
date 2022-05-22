const User = require("../modal/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");
const CustomApiError = require("../errors/custom-api-error");
const { JsonWebTokenError } = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res
    .status(StatusCodes.OK)
    .send({ users, totalUsers: users.length, numOfPages: 1 });
};
const UpdateUser = async (req, res) => {
  const { id: uId } = req.params;
  console.log(uId);
  const { name, email, type, isValidStaff } = req.body;
  console.log(req.body);
  if (!name || !email || !type) {
    throw new BadRequestError("Please Provide all values.");
  }
  const user = await User.findOne({ _id: uId });
  if (!user) {
    throw new NotFoundError(`No user with user ID ${uId}`);
  }
  const updateUser = await User.findOneAndUpdate({ _id: uId }, req.body, {
    runValidators: true,
    new: true,
  });

  res.status(StatusCodes.OK).send({ updateUser });
};
const deleteUser = async (req, res) => {
  const { id: dId } = req.params;
  const user = await User.findOne({ _id: dId });
  if (!user) {
    throw new NotFoundError();
  }
  //check permissions

  await user.remove();
  return res.status(StatusCodes.OK).send({ msg: "Success! User Removed" });
};

module.exports = { getAllUsers, UpdateUser, deleteUser };
