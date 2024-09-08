const express = require('express');
const app = express();
const resRouter = require('./routes/residentRoute')
const roomRouter = require('./routes/roomRouter')
const bookingRouter = require('./routes/bookingRoute')
app.use(express.json());
app.use("/api/v1",resRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use((req, res, next) => {
    console.log('Request received at:', new Date());
    next();
  });
module.exports = app;