const router = require('express').Router()
const controllers = require('../controllers/CategoryController')

const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('../middleware')
// ROUTE PROTECTION NOTES
// verifyTokenAndAuthorization:  checks jwt token and if auth
// verifyTokenAndAdmin: checks jwt token and isAdmin status (admin dashboard icebox feature)
// verifyToken: checks if logged in (jwt token generated after every successful login)

// create category
router.post('/addCategory', controllers.createCategory)

// Get All Categories (Read)
router.get('/category', controllers.getAllCategories)
// Get by product ID
router.get('/category/:id', controllers.getCategoryById)
// UPDATE
router.put(
	'/updateCategory/:id',
	verifyTokenAndAdmin,
	controllers.updateCategory
)
// DELETE
router.delete(
	'/deleteCategory/:id',
	verifyTokenAndAdmin,
	controllers.deleteCategory
)

module.exports = router
