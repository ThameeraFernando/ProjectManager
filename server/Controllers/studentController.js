const Groups = require("../modal/StudentGroup");
const { StatusCodes } = require("http-status-codes");

const groupRegister = (req, res) => {
  res.send("Hello world");
};

module.exports = { groupRegister };
