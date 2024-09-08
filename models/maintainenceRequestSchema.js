// backend/models/MaintenanceRequest.js
const mongoose = require('mongoose');

const MaintenanceRequestSchema = new mongoose.Schema({
  resident: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resident',
    required: true,
  },
  issueDetails: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'low',
  },
  status: {
    type: String,
    enum: ['submitted', 'in_progress', 'completed'],
    default: 'submitted',
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming there's a User model for staff/admin
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('MaintenanceRequest', MaintenanceRequestSchema);
