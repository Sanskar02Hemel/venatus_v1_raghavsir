const express = require('express');
const router = express.Router();
const eventController = require('../controllers/events');

router.use('/pastevents', eventController.getEvents);

module.exports = router;
