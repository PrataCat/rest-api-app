const { contactValidator } = require("../helpers/contactValidator");

const validateBody = () => {
  const func = async (req, res, next) => {
    const { name, email, phone } = req.body;

    if (!name && !email && !phone) {
      return res.status(400).json({ message: "missing fields" });
    }

    const { error } = contactValidator(req.body);

    if (error) {
      const field = error.details[0].path[0];

      return res
        .status(400)
        .json({ message: `Missing required '${field}' field` });
    }

    next();
  };
  return func;
};

module.exports = validateBody;
