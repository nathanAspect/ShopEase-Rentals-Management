const express = require('express')
const { userController: { GetUser, UpdateUser, DeleteUser } } = require('../controllers')
const router = express.Router()

router.get('/', GetUser);
router.put('/', UpdateUser);
router.delete('/', DeleteUser);

module.exports = router