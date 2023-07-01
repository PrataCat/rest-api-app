const jwt = require("jsonwebtoken");

const CustomError = require("../helpers/CustomError");
const User = require("../models/user");

const { JWT_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(new CustomError(401, "Not authorized"));
  }

  try {
    const { id } = jwt.verify(token, JWT_KEY);
    const user = await User.findById(id);

    if (!user) {
      next(new CustomError(401, "Not authorized"));
    }
  } catch (error) {
    next(new CustomError(401, "Not authorized"));
  }

  next();
};

module.exports = authenticate;
