const router = require("express").Router();
const controllers = require("../controllers/UserController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware')

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, controllers.updateUser)
// DELETE
router.delete('/:id', verifyTokenAndAuthorization, controllers.deleteUser)
//GET USER
router.get('/find/:id', controllers.getUser)
// GET ALL USERS
router.get('/', controllers.getAllUsers)
//GET USER STATS
router.get('/stats', controllers.getUserStats)

module.exports = router