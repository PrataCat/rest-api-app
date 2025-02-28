const express = require("express");

const {
  getAll,
  getById,
  addOne,
  removeOne,
  updateOne,
  updateStatusContact,
} = require("../../controllers/contacts");

const {
  validateById,
  validateBody,
  validateFavorite,
  validateContactExists,
  authenticate,
} = require("../../middlewares");

const router = express.Router();

router.use("/", authenticate);
router.use("/:contactId", validateById);

router
  .route("/")
  .get(getAll)
  .post(validateBody(), validateContactExists, addOne);

router
  .route("/:contactId")
  .get(getById)
  .delete(removeOne)
  .put(validateBody(), updateOne);

router.patch("/:contactId/favorite", validateFavorite(), updateStatusContact);

module.exports = router;
