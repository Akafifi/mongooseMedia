const connection = require('./config/connection')
const { User, Thought } = require('./models')


const user = new User ({
    username: 'johnDoe',
    email: 'johndoe@gmail.com',
})


console.log(user)