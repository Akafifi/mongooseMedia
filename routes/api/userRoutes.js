const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,

} = require('../../controllers/userControllers')

router.route('/:thoughtId').get(getAllUsers).post(createUser);

router.route('getOneThought')

router.put(updateUser)
    
router.delete(deleteUser)


module.exports = router;