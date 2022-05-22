const jwt = require("jsonwebtoken");
const UnauthenticatedError = require("../errors/unauthenticated-error");
const auth = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeaders.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userID: payload.userID };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = auth;
