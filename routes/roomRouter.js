// backend/routes/rooms.js
const express = require('express');
const router = express.Router();
const Room = require('../models/roomSchema');
const roomController = require('../controllers/roomController');
// Get all rooms
router.get('/',roomController.getRoom);

// Create a new room
router.post('/',roomController.createRoom );

module.exports = router;
