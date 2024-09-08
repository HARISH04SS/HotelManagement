// backend/models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  resident: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resident',
    required: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  checkInDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: false
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'canceled', 'checked-out'],
    default: 'pending'
  },
  totalPrice: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['paid', 'unpaid', 'partially paid'],
    default: 'unpaid'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
BookingSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
  });
module.exports = mongoose.model('Booking', BookingSchema);
