const Router = require('express').Router()
const AuthRouter = require("./AuthRouter")
const ProductRouter = require("./ProductRouter")
const CategoryRouter = require("./CategoryRouter")



// Test
Router.get('/', (req, res) => res.send('This is root babyyyyyyy!'))

Router.use("/auth", AuthRouter)
Router.use("/product", ProductRouter)
Router.use("/category", CategoryRouter)


module.exports = Router;