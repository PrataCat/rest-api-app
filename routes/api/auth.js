const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
} = require("../../controllers/auth");

const { validateUser, authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateUser(), register);
router.post("/login", validateUser(), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);

module.exports = router;
