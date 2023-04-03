const router = require('express').Router()
const controllers = require('../controllers/ProductController')
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware')
// ROUTE PROTECTION NOTES
// verifyTokenAndAuthorization:  checks jwt token and if auth 
// verifyTokenAndAdmin: checks jwt token and isAdmin status (admin dashboard icebox feature)
  // verifyToken: checks jwt token 

// create product || protected admin only
router.post('/addProduct',verifyTokenAndAdmin,  controllers.createProduct)

// Get All products (Read)
router.get('/products', controllers.getAllProducts)
// Get by product ID
router.get('/products/:id', controllers.getProductById)
// UPDATE || protected admin only
router.put('/updateProduct/:id', verifyTokenAndAdmin, controllers.updateProduct)
// DELETE || protected admin onl
router.delete('/deleteProduct/:id',verifyTokenAndAdmin, controllers.deleteProduct)

module.exports = router
