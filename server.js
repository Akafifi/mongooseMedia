const connection = require('./config/connection')
const routes = require('./routes')

const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});