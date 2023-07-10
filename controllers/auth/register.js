const gravatar = require("gravatar");
const CustomError = require("../../helpers/сustomError");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");
const { createHashPass } = require("../../helpers/hashPass");

const register = catchAsyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return next(new CustomError(409, "Email in use"));
  }

  const hashPass = await createHashPass(password);

  const newUser = await User.create({
    ...req.body,
    password: hashPass,
    avatarURL: gravatar.url(email),
  });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
});

module.exports = register;
