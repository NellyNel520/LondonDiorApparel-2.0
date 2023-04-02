const Router = require("express").Router();

// Test
Router.get('/', (req, res) => res.send('This is root!'))

module.exports = Router;