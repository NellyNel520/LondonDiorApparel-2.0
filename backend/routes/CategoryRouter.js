const router = require("express").Router();
const controllers = require("../controllers/CategoryController");


// create category
router.post('/addCategory', controllers.createCategory)

// Get All Categories (Read)
router.get('/category', controllers.getAllCategories)
// Get by product ID
router.get('/category/:id', controllers.getCategoryById)
// UPDATE
router.put('/updateCategory/:id', controllers.updateCategory)
// DELETE
router.delete('/deleteCategory/:id', controllers.deleteCategory)

module.exports = router