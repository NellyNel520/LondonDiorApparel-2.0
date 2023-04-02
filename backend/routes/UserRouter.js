const router = require("express").Router();
const controllers = require("../controllers/UserController");

// UPDATE
router.put('/:id', controllers.updateUser)
// DELETE
router.delete('/:id', controllers.deleteUser)
//GET USER
router.get('/find/:id', controllers.getUser)
// GET ALL USERS
router.get('/', controllers.getAllUsers)
//GET USER STATS
router.get('/stats', controllers.getUserStats)

module.exports = router