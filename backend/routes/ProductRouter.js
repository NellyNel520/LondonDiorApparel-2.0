const router = require('express').Router()
const controllers = require('../controllers/ProductController')
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require('../middleware')
// ROUTE PROTECTION NOTES
// verifyTokenAndAuthorization:  checks jwt token and if auth
// verifyTokenAndAdmin: checks jwt token and isAdmin status (admin dashboard icebox feature)
// verifyToken: checks jwt token

// create product || protected admin only
router.post('/addProduct', controllers.createProduct)

// Get All products (Read)
router.get('/:category', controllers.filterAllProducts)
router.get('/', controllers.filterAllProducts)
// Get All products && FILTER / SORT (Read)
// router.get('/all', controllers.getAllProducts)
// Get by product ID
router.get('/find/:id', controllers.getProductById)
// UPDATE || protected admin only
router.put('/updateProduct/:id', controllers.updateProduct)
// DELETE || protected admin onl
router.delete('/deleteProduct/:id', controllers.deleteProduct)

module.exports = router
