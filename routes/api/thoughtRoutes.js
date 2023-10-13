const router = require('express').Router();
const {
    getOneThought,
    getAllThoughts,
    createThought,
    updateThought,
    deleteThought,

} = require('../../controllers/thoughtControllers')

router
    .route('/:courseId')
    .get('getOneThought')
    .put(updateThought)
    .delete(deleteThought)


module.exports = router;