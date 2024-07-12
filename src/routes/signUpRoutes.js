const express = require('express');
const router = express.Router();

const { getAllUsers, checkValidSignUp } = require('../controllers/signUpControllers');

router.post('/signup', checkValidSignUp);
router.get('/signup', getAllUsers);

module.exports = router;
