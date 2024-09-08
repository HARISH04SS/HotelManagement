// backend/models/Room.js
const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ['single', 'double', 'suite'],
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  currentOccupancy: {
    type: Number,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Room', RoomSchema);
