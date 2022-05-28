const User = require("../modal/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");
const CustomApiError = require("../errors/custom-api-error");
const { JsonWebTokenError } = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  const { type, search, sort } = req.query;
  const queryObject = {};

  //chain sort conditions
  if (type && type !== "all") {
    queryObject.type = type;
  }
  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
    console.log(search);
  }

  //no await
  let result = User.find(queryObject);

  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("name");
  }
  if (sort === "z-a") {
    result = result.sort("-name");
  }
  const users = await result;

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
