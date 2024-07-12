const express = require('express');
const router = express.Router();

const { logInValidityCheck } = require('../controllers/logInControllers');

router.post('/login', logInValidityCheck);

module.exports = router;
