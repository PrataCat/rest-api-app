const CustomError = require("./CustomError");

const handleMongooseError = (error, data, next) => {
  if (error) {
    next(new CustomError(400, "Bad Request"));
  }
  next();
};

module.exports = handleMongooseError;
