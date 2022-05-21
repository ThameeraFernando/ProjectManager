const CustomApiError = require("./custom-api-error");
const { StatusCodes, METHOD_FAILURE } = require("http-status-codes");
class UnauthenticatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
