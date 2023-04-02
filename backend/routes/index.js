const Router = require('express').Router()
const AuthRouter = require("./AuthRouter")
const ProductRouter = require("./ProductRouter")



// Test
Router.get('/', (req, res) => res.send('This is root babyyyyyyy!'))

Router.use("/auth", AuthRouter)
Router.use("/product", ProductRouter)


module.exports = Router;