const Room = require('../models/roomSchema');
const roomController = {
    getRoom: async (req, res) => {
        try {
          const rooms = await Room.find();
          res.json(rooms);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      },
    createRoom :async (req, res) => {
        const room = new Room(req.body);
        try {
          const newRoom = await room.save();
          res.status(201).json(newRoom);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      }
}


module.exports = roomController;