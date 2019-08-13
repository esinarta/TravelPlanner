var express = require('express');
var router = express.Router();
const models = require('../models/');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true
});

const Trip = models.Trip;

module.exports = router;