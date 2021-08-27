const router = require("express").Router();
const { getThoughts, getOneThought, addThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controllers/thought-controller");

router
    .route("/")
    .get(getThoughts)
    .post(addThought)

router
    .route("/:id")
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

router
    .route("/:thoughtId/reactions")
    .post(addReaction)
    
router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction)

module.exports = router;