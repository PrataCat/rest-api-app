const { contactValidator } = require("../helpers/contactValidator");

const validateBody = () => {
  const func = async (req, res, next) => {
    const { name, email, phone } = req.body;

    if (!name && !email && !phone) {
      res.status(400).json("Missing fields");
    }

    const { error } = contactValidator(req.body);

    if (error) {
      const field = error.details[0].path[0];

      res.status(400).json(`Missing required '${field}' field`);
    }

    next();
  };
  return func;
};

module.exports = validateBody;
