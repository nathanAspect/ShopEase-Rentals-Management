const express = require('express');
const router = express.Router();

const { signupControllers: { checkValidSignUp, checkUsername, getAllUsers } } = require('../controllers');

router.post('/', checkValidSignUp);
router.get('/:username', checkUsername)
router.get('/', getAllUsers);

module.exports = router;
