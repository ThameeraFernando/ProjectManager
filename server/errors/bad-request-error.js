const CustomApiError = require("./custom-api-error");
const { StatusCodes, METHOD_FAILURE } = require("http-status-codes");
class BadRequestError extends CustomApiError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
