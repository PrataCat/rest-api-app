const { favoriteValidator } = require("../../helpers");
const CustomError = require("../../helpers/customError");
const Contact = require("../../models/contacts");

const getAll = async (req, res, next) => {
  // const { _id: owner } = req.user._id;
  const currentOwner = {
    owner: req.user._id,
  };

  const { page = 1, limit = 10, favorite = "" } = req.query;

  if (favorite) {
    const { error } = favoriteValidator({ favorite });
    console.log(error);

    if (error) {
      return next(new CustomError(400, "Bad request"));
    }

    currentOwner.favorite = favorite;
  }

  const skip = (page - 1) * limit;

  const result = await Contact.find(currentOwner, "-createdAt -updatedAt", {
    skip,
    limit,
  });

  res.status(200).json(result);
};

module.exports = getAll;
