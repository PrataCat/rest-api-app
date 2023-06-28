const CustomError = require("../helpers/CustomError");
const favoriteValidator = require("../helpers");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

const validateFavorite = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const { favorite } = req.body;

    if (!favorite) {
      return next(new CustomError(400, "missing field favorite"));
    }

    const { error } = favoriteValidator(req.body);

    if (error) {
      next(new CustomError(400, "Missing field favorite"));
    }

    next();
  });

  return func;
};

module.exports = validateFavorite;
