// backend/models/Resident.js
const mongoose = require('mongoose');

const ResidentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emergencyContact: {
    type: String,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
  },
  checkInDate: {
    type: Date,
    default: Date.now,
  },
  checkOutDate: {
    type: Date,
  },
  role: {
    type: String,
    enum: ['resident', 'admin', 'staff'],
    default: 'resident',
  },
  roomAllocate:{
    type: Boolean
  }
});

module.exports = mongoose.model('Resident', ResidentSchema);
