const Router = require('express').Router()
const AuthRouter = require("./AuthRouter")
const ProductRouter = require("./ProductRouter")
const CategoryRouter = require("./CategoryRouter")
const OrderRouter = require("./OrderRouter")
const CartRouter = require("./CartRouter")
const UserRouter = require("./UserRouter")
const StripeRouter = require("./StripeRouter")



// Test
Router.get('/', (req, res) => res.send('This is root babyyyyyyy!'))

Router.use("/auth", AuthRouter)
Router.use("/checkout", StripeRouter)
Router.use("/products", ProductRouter)
Router.use("/category", CategoryRouter)
Router.use("/order", OrderRouter)
Router.use("/cart", CartRouter)
Router.use("/user", UserRouter)




module.exports = Router;