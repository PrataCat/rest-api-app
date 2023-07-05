const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");

const updateSubscription = catchAsyncWrapper(async (req, res) => {
  const { subscription } = req.body;
  const { _id, email } = req.user;

  await User.findByIdAndUpdate(_id, { subscription }, { new: true });

  res.json({
    email,
    subscription,
  });
});

module.exports = updateSubscription;
