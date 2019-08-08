const mongoose = require('mongoose');

const staySchema = new mongoose.Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  checkin_date: {
    type: Date
  },
  checkout_date: {
    type: Date
  },
  checkin_time: {
    type: Date
  },
  checkout_time: {
    type: String
  }
});

const Stay = mongoose.model('Stay', staySchema);

module.exports = Stay;