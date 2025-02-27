const express = require('express')
const router = express.Router()
const Controller = require('../controllers/user.controller.js')

router.get('/users',Controller.getUser)
router.get('/users/:id',Controller.getUserById)
router.post('/users',Controller.createUser)
router.put('/users/:id',Controller.updateUser)
router.delete('/users/:id',Controller.deleteUser)

module.exports = router