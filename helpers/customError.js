class CustomError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

module.exports = CustomError;

// const CustomError = (status, message) => {
//   const error = new Error(message);
//   error.status = status;

//   return error;
// };

// module.exports = CustomError;
