const { notificationControllers: { getNotification}} = require('../controllers/')
const express = require('express');


const router = express.Router();

router.get('/', getNotification);

module.exports = router;