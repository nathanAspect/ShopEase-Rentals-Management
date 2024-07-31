const express = require('express');
const { logInValidityCheck } = require('../controllers/logInControllers');

const router = express.Router();


router.post('/', logInValidityCheck);

module.exports = router;
