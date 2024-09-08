const express = require('express');
const app = express();
const resRouter = require('./routes/residentRoute')

app.use(express.json());
app.use("/api/v1",resRouter);

module.exports = app;