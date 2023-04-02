const Router = require('express').Router()
const AuthRouter = require("./AuthRouter")
const ProductRouter = require("./ProductRouter")
const CategoryRouter = require("./CategoryRouter")
const OrderRouter = require("./OrderRouter")



// Test
Router.get('/', (req, res) => res.send('This is root babyyyyyyy!'))

Router.use("/auth", AuthRouter)
Router.use("/product", ProductRouter)
Router.use("/category", CategoryRouter)
Router.use("/order", OrderRouter)


module.exports = Router;