const router = require('express').Router();
const {
    getOneThought,
    getAllThoughts,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction

} = require('../../controllers/thoughtControllers')

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
    


router
    .route('/:id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(createReaction);
  
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);


module.exports = router;