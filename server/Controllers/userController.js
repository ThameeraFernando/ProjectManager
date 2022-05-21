const getAllUsers = async (req, res) => {
  return res.status(200).send({ msg: "get all users" });
};
const UpdateUser = async (req, res) => {
  return res.status(200).send({ msg: "update user" });
};
const deleteUser = async (req, res) => {
  return res.status(200).send({ msg: "delete user" });
};

module.exports = { getAllUsers, UpdateUser, deleteUser };
