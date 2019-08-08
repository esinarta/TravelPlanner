const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: {
    type: String
  },
  flight: {
    type: ObjectId,
    ref: 'Flight',
  },
  stay: {
    type: ObjectId,
    ref: 'Stay',
  }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;