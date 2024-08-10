const express = require('express');
const router = express.Router();
const { shopRoutes: { createShop, getShops, getShop, deleteShop}} = require('../controllers');

router.post('/', createShop);
router.get('/:shopId', getShop);
router.get('/', getShops);
router.delete('/:shopId', deleteShop)

module.exports = router;