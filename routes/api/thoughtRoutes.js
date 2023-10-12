const router = require('express').Router();
const {
    getThought,
    getOneThought,
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