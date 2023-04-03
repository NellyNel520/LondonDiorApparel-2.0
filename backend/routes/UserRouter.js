const router = require("express").Router();
const controllers = require("../controllers/UserController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware')
// ROUTE PROTECTION NOTES
// verifyTokenAndAuthorization:  checks jwt token and if auth 
// verifyTokenAndAdmin: checks jwt token and isAdmin status (admin dashboard icebox feature)
  // verifyToken: checks jwt token 

// UPDATE 
router.put('/:id', verifyTokenAndAuthorization, controllers.updateUser)
// DELETE
router.delete('/:id', verifyTokenAndAuthorization, controllers.deleteUser)
//GET USER
router.get('/find/:id', verifyTokenAndAdmin,  controllers.getUser)
// GET ALL USERS
router.get('/', verifyTokenAndAdmin, controllers.getAllUsers)
//GET USER STATS
router.get('/stats', verifyTokenAndAdmin,  controllers.getUserStats)

module.exports = router