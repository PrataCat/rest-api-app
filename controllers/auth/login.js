const jwt = require("jsonwebtoken");
require("dotenv").config();
const { comparePass } = require("../../helpers/hashPass");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const CustomError = require("../../helpers/сustomError");
const User = require("../../models/user");

const { JWT_KEY } = process.env;

const login = catchAsyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(new CustomError(401, "Email or password is wrong"));
  }

  const passCompare = await comparePass(password, user.password);

  if (!passCompare) {
    return next(new CustomError(401, "Email or password is wrong"));
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, JWT_KEY, { expiresIn: "24h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token: token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
});

module.exports = login;
