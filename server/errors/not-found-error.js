const CustomApiError = require("./custom-api-error");
const { StatusCodes, METHOD_FAILURE } = require("http-status-codes");
class NotFoundError extends CustomApiError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
