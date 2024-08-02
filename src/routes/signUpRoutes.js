const express = require('express');
const router = express.Router();

const { signupControllers } = require('../controllers');

router.post('/', signupControllers.checkValidSignUp);
router.get('/', signupControllers.getAllUsers);

module.exports = router;
