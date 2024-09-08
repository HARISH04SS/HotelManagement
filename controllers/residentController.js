const Resident = require('../models/residentsSchema');

const residentController = {
    getResident: async (req, res) => {
        try {
          const residents = await Resident.find();
          res.json(residents);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      },
      createResident: async (req, res) => {
        const resident = new Resident(req.body);
        try {
          const newResident = await resident.save();
          res.status(201).json(newResident);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      },
      getUniResident: async (req,res) =>{
        const getMail = req.headers;
        console.log(getMail);
        const residents = await Resident.findById('getMail');
        res.json(residents);
    }
};


module.exports = residentController;