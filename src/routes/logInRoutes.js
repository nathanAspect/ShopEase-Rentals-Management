const express = require('express');
const { logInValidityCheck } = require('../controllers');

const router = express.Router();


router.post('/', logInValidityCheck);

module.exports = router;
