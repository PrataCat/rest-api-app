const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/auth");

const {
  validateUser,
  authenticate,
  validateSubscription,
  validateEmail,
  upload,
} = require("../../middlewares");

const router = express.Router();

router.post("/register", validateUser(), register);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", validateEmail(), resendVerifyEmail);
router.post("/login", validateUser(), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);
router.patch("/", authenticate, validateSubscription(), updateSubscription);
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);
// upload.array([{name: "avatar", maxCount: 1}, {name: "emblem", maxCount: 1}])
// upload.fields("avatar", <max number of files>)

module.exports = router;
