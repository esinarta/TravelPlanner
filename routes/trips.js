var express = require('express');
var router = express.Router();
const models = require('../models/');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true
});

router.post('/add', async (req, res) => {
  //let user = req.session.currentUser;
  //if (user) {
    //req.body.user = user._id;
    let trip = new models.Trip(req.body);
    await trip.save();
  //} else {
    //res.redirect('/login');
  //}
});

const Trip = models.Trip;

module.exports = router;