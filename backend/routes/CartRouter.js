const router = require("express").Router();
const controllers = require("../controllers/CartController");


const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware')
// ROUTE PROTECTION NOTES
// verifyTokenAndAuthorization:  checks jwt token and if auth 
// verifyTokenAndAdmin: checks jwt token and isAdmin status (admin dashboard icebox feature)
  // verifyToken: checks if logged in (jwt token generated after every successful login) 

// create cart
router.post('/addCart', verifyToken, controllers.createCart)

// Get All carts (Read admin only need protected route)
router.get('/carts', verifyTokenAndAdmin, controllers.getAllCarts)

// Get by cart ID
router.get('/cart/:id', controllers.getCartById)

// Get User cart (userId)
router.get('/cart/:userId', verifyTokenAndAuthorization, controllers.getUserCart)



// UPDATE
router.put('/updateCart/:id', verifyTokenAndAuthorization,  controllers.updateCart)
// DELETE
router.delete('/deleteCart/:id', verifyTokenAndAuthorization, controllers.deleteCart)

module.exports = router