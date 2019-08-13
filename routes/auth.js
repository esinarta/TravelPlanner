var express = require('express');
var router = express.Router();
const models = require('../models/');
const mongoose = require("mongoose");
const Bcrypt = require('bcryptjs');
const User = models.User;

//Register
router.post('/register', async (req, res) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10);
  let user = new models.User(req.body);
  user.save((err) => {
    console.log(err);
    if (err) {
      res.redirect('/register');
    } else {
      req.session.currentUser = user;
      res.redirect('/dashboard');
    }
  });
  console.log(user);
});

//Login
router.post('/', async (req, res) => {
  User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
    if (err) {
      console.error(err);
      res.redirect('/login');
    }
    //Validate password with Bcrypt
    if(!user || !Bcrypt.compareSync(req.body.password, user.password)) {
      res.redirect('/login');
    } else {
      req.session.currentUser = user;
      res.redirect('/dashboard');
    }
  });
});

//Logout
router.get('/logout', (req, res) => {
  req.session.currentUser = null;
  res.redirect('/');
});