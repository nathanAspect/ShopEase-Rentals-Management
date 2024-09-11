const { getHomeDetail } = require('../controllers/homeControllers') 

const express = require('express');


const router = express.Router();

router.get('/', getHomeDetail);

module.exports = router;