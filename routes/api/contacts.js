const express = require("express");
const {
  getAll,
  getById,
  addOne,
  removeOne,
  updateOne,
} = require("../../controllers/contacts");

const validateById = require("../../middlewares/validateById");
const validateBody = require("../../middlewares/validateBody");

const router = express.Router();

router.get("/", getAll);

router.post("/", validateBody(), addOne);

router.get("/:contactId", validateById, getById);

router.delete("/:contactId", validateById, removeOne);

router.put("/:contactId", validateById, updateOne);

module.exports = router;
