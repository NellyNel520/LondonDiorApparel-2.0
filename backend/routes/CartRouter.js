const router = require("express").Router();
const controllers = require("../controllers/CartController");
n
// create cart
router.post('/addCart', controllers.createCart)

// Get All carts (Read admin only need protected route)
router.get('/carts', controllers.getAllCarts)
// Get by cart ID
router.get('/cart/:id', controllers.getCartById)
// UPDATE
router.put('/updateCart/:id', controllers.updateCart)
// DELETE
router.delete('/deleteCart/:id', controllers.deleteCart)

module.exports = router