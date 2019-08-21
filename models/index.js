const mongoose = require('mongoose');
const User = require('./user');
const Flight = require('./flight');
const Stay = require('./stay');
const Trip = require('./trip');

const connectDb = () => {
  return mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true
  });
};

const models = {
  User,
  Flight,
  Stay,
  Trip
};

module.exports = { connectDb };
module.exports = models;