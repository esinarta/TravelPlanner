const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
});

userSchema.pre('save', function(next) {
  this.first_name = this.first_name.toLowerCase();
  this.last_name = this.last_name.toLowerCase();
  this.email = this.email.toLowerCase();
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;