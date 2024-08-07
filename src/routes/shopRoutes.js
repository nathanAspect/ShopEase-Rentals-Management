const express = require('express');
const router = express.Router();
const { shopRoutes: { createShop}} = require('../controllers');

router.post('/', createShop);

module.exports = router;