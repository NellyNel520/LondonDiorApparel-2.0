const router = require("express").Router();
const controllers = require("../controllers/OrderController");

// orders will need protected routes admin only once auth is completed

// create order
router.post('/newOrder', controllers.createOrder)

// Get All orders (Read)
router.get('/orders', controllers.getAllOrders)
// Get by order ID
router.get('/orders/:userId', controllers.getOrderById)
// Get User order (by user id)
router.get('/order/:id', controllers.getOrderById)
// UPDATE
router.put('/updateOrder/:id', controllers.updateOrder)
// DELETE
router.delete('/deleteOrder/:id', controllers.deleteOrder)

module.exports = router