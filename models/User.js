const { User, model } = require('mongoose')

const userSchema = new User({
    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
    thoughts: [
        {

        }
    ],
    friends: [
        {

        }
    ],
})

const User = model('User', userSchema)

module.exports = User