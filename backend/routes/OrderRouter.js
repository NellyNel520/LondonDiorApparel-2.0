const router = require("express").Router();
const controllers = require("../controllers/OrderController");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware')
// ROUTE PROTECTION NOTES
// verifyTokenAndAuthorization:  checks jwt token and if auth 
// verifyTokenAndAdmin: checks jwt token and isAdmin status (admin dashboard icebox feature)
  // verifyToken: checks jwt token 


// orders will need protected routes admin only once auth is completed

// create order (must create a account & login to place an order)
router.post('/newOrder', verifyToken,  controllers.createOrder)

// Get All orders (Read) || admin function
router.get('/orders', verifyTokenAndAdmin,  controllers.getAllOrders)

// Get by order ID
router.get('/orders/:userId', controllers.getOrderById)

// Get User order (by user id) login required
router.get('/order/:id', verifyTokenAndAuthorization,  controllers.getOrderById)

// Get monthly income || admin only function (admin dashboard icebox)
router.get('/', verifyTokenAndAdmin,  controllers.getMonthlyIncome)

// UPDATE || admin only functionality
router.put('/updateOrder/:id', verifyTokenAndAdmin,  controllers.updateOrder)
// DELETE || admin only functionality
router.delete('/deleteOrder/:id', verifyTokenAndAdmin, controllers.deleteOrder)

module.exports = router