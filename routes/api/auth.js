const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
} = require("../../controllers/auth");

const { validateUser } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateUser(), register);
router.post("/login", validateUser(), login);
router.post("/logout", logout);
router.get("/current", getCurrent);

module.exports = router;
