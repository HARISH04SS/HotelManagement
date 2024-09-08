
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');


router.use((req, res, next) => {
    console.log('Request received in booking router at:', new Date());
    next();
  });
// Create a new booking
router.post('/', bookingController.createBooking);

// Get all bookings
router.get('/', bookingController.getBookings);

module.exports = router;
