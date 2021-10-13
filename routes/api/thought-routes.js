const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getThoughtById).put(updateThought);

router.route("/:userId").post(addThought);

router.route("/:userId/:thoughtId").delete(removeThought);

module.exports = router;
