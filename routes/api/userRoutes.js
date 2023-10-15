const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,

} = require('../../controllers/userControllers')

router.route('/:thoughtId').get(getAllUsers).post(createUser);

router.route('getOneThought')

router.put(updateUser)
    
router.delete(deleteUser)

router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;