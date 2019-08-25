var express = require('express');
var router = express.Router();
const models = require('../models/');
const mongoose = require("mongoose");
const Bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true
});

const User = models.User;

//Register
router.post('/register', (req, res) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10);
  let user = new models.User(req.body);
  user.save((err) => {
    console.log(err);
    if (err) {
      res.send(err);
    } else {
      //req.session.currentUser = user;
      res.redirect('/dashboard');
    }
  });
});

//Login
router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
    if (err) {
      console.error(err);
      res.redirect('/login');
    }
    //Validate password with Bcrypt
    if(!user || !Bcrypt.compareSync(req.body.password, user.password)) {
      res.redirect('/login');
    } else {
      //req.session.currentUser = user;
      res.redirect('/dashboard');
    }
  });
});

//Get users
router.get('/', function(req, res) {
  User.find( (err, user) => {
    res.json(user);
  });
});

module.exports = router;
