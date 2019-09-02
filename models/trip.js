const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const tripSchema = new mongoose.Schema({
  name: {
    type: String
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
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