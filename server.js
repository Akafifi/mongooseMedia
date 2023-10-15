const connection = require('./config/connection')
const { User, Thought } = require('./models')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })


const user = new User ({
    username: 'johnDoe',
    email: 'johndoe@gmail.com',
})


console.log(user)