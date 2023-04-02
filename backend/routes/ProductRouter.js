const router = require("express").Router();
const controllers = require("../controllers/ProductController");
n
// create product
router.post('/addProduct', controllers.createProduct)

// Get All products (Read)
router.get('/products', controllers.getAllProducts)
// Get by product ID
router.get('/products/:id', controllers.getProductById)
// UPDATE
router.put('/updateProduct/:id', controllers.updateProduct)
// DELETE
router.delete('/deleteProduct/:id', controllers.deleteProduct)

module.exports = router