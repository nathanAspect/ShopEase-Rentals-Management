const express = require('express');
const router = express.Router();

const { getAllUsers, checkValidSignUp } = require('../controllers/signUpControllers');

router.post('/', checkValidSignUp);
router.get('/', getAllUsers);

module.exports = router;
