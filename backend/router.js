const Router = require("express")
const User = require('./User.js')
const UserController = require('./UserController.js')

const router = new Router();

router.post('/posts', UserController.create)
router.get('/posts/', UserController.getAll)
router.get('/posts/:login', UserController.getOne)
router.put('/posts', UserController.update)
router.delete('/posts/:login', UserController.delete)

module.exports = router