const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a user
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a User
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a user
  // async deleteUser(req, res) {
  //   try {
  //     const user = await User.findOneAndRemove({ _id: req.params.userId });

  //     if (!user) {
  //       return res.status(404).json({ message: 'No user with that ID' });
  //     }

  //     await Student.deleteMany({ user: { $in: req.params.users } });
  //     res.json({ message: 'User and thoughts deleted!' });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend (req, res) {
    try {
      console.log('You are adding a friend');
      console.log(req.body);
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true } 
      );
      if (!friend) {
        return res
          .status(404)
          .json({message: 'No friend found with that ID'})
      }
      res.json(friend)
    } catch(err) {
      res.status(500).json(err);
    }
  },
  async removeFriend (req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: { friendsId: req.params.friendsId } } },
        { runValidators: true, new: true }
      );
      if (!friend) {
        return res
          .status(404)
          .json({ message: 'No friend found with that ID'});
      }

      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
