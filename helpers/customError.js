const errorMessageList = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

class CustomError extends Error {
  constructor(status, message = errorMessageList[status]) {
    super(message);
    this.status = status;
  }
}

module.exports = CustomError;
