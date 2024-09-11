const express = require('express');
const router = express.Router();
const { shopControllers: { createShop, activateShop, getShops, getShop, deleteShop}} = require('../controllers');

router.post('/', createShop);
router.get('/:shopId', getShop);
router.get('/', getShops);
router.delete('/:shopId', deleteShop);
router.patch('/:shopId', activateShop);

module.exports = router;