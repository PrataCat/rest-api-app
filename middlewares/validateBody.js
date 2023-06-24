const { contactValidator } = require("../helpers/contactValidator");
const CustomError = require("../helpers/customError");

const validateBody = () => {
  const func = async (req, res, next) => {
    try {
      const { name, email, phone } = req.body;

      if (!name && !email && !phone) {
        return res.status(400).json({ message: "missing fields" });
      }

      const { error } = contactValidator(req.body);

      if (error) {
        const field = error.details[0].path[0];
        const message = `Missing required '${field}' field`;

        // return res
        //   .status(400)
        //   .json({ message: `Missing required '${field}' field` });
        throw new CustomError(400, message);
      }
    } catch (err) {
      next(err);
    }
  };
  return func;
};

module.exports = validateBody;
