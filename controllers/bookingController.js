
const Booking = require('../models/bookingSchema');

const bookingController = {
  createBooking: async (req, res) => {
    try {
      const booking = new Booking(req.body);
      const newBooking = await booking.save();
      res.status(201).json(newBooking);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getBookings: async (req, res) => {
    try {
      const bookings = await Booking.find().populate('resident').populate('room');
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = bookingController;
