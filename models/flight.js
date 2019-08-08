const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flight_code: {
    type: String
  },
  airline: {
    type: String
  },
  date: {
    type: Date
  },
  departure_time: {
    type: Date
  },
  arrival_time: {
    type: Date
  },
  departing_airport: {
    type: String
  },
  arriving_airport: {
    type: String
  }
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;