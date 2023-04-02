const router = require("express").Router();
const controllers = require("../controllers/OrderController");

// orders will need protected routes admin only once auth is completed
n
// create order
router.post('/newOrder', controllers.createOrder)

// Get All orders (Read)
router.get('/orders', controllers.getAllOrders)
// Get by order ID
router.get('/orders/:userId', controllers.getOrderById)
// Get User order (by user id)
router.get('/userOrder/:id', controllers.getOrderById)
// UPDATE
router.put('/updateProduct/:id', controllers.updateProduct)
// DELETE
router.delete('/deleteProduct/:id', controllers.deleteProduct)

module.exports = router