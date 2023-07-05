const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
  updateSubscription,
} = require("../../controllers/auth");

const {
  validateUser,
  authenticate,
  validateSubscription,
} = require("../../middlewares");

const router = express.Router();

router.post("/register", validateUser(), register);
router.post("/login", validateUser(), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);
router.patch("/", authenticate, validateSubscription(), updateSubscription);

module.exports = router;
