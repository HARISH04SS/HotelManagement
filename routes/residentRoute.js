// backend/routes/residents.js
const express = require('express');
const router = express.Router();
const Resident = require('../models/residentsSchema');
const residentController = require('../controllers/residentController');

// Get all residents
router.get('/',residentController.getResident );

// Create a new resident
router.post('/',residentController.createResident );

router.get('/getByEmail',residentController.getUniResident);


module.exports = router;
