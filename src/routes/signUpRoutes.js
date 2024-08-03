const express = require('express');
const router = express.Router();

const { signupControllers: { checkValidSignUp, getAllUsers } } = require('../controllers');

router.post('/', checkValidSignUp);
router.get('/', getAllUsers);

module.exports = router;
