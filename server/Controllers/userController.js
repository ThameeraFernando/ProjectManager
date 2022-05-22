const User = require("../modal/User");
const { StatusCodes } = require("http-status-codes");
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res
    .status(StatusCodes.OK)
    .send({ users, totalUsers: users.length, numOfPages: 1 });
};
const UpdateUser = async (req, res) => {
  return res.status(200).send({ msg: "update user" });
};
const deleteUser = async (req, res) => {
  return res.status(200).send({ msg: "delete user" });
};

module.exports = { getAllUsers, UpdateUser, deleteUser };
