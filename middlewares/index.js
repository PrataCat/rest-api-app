const validateById = require("./validateById");
const validateBody = require("./validateBody");
const validateFavorite = require("./validateFavorite");
const validateContactExists = require("./validateContactExists");
const validateUser = require("./validateUser");
const authenticate = require("./authenticate");

module.exports = {
  validateById,
  validateBody,
  validateFavorite,
  validateContactExists,
  validateUser,
  authenticate,
};
