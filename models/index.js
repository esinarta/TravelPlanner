const mongoose = require('mongoose');
const User = require('./user');

const connectDb = () => {
  return mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true
  });
};

const models = {
  User,
};

module.exports = { connectDb };
module.exports = models;