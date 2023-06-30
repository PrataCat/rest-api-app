const CustomError = require("../../helpers/CustomError");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");

const register = catchAsyncWrapper(async (req, res, next) => {
  console.log("registerUser");
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return next(new CustomError(409, "Email in use"));
  }

  const newUser = await User.create(req.body);
  console.log(newUser);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
});

module.exports = register;
