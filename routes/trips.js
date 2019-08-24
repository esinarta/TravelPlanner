var express = require('express');
var router = express.Router();
const models = require('../models/');
const mongoose = require("mongoose");

const Flight = models.Flight;
const Stay = models.Stay;

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

router.post('/delete', (req, res) => {
  let t = req.body.trip_id;
  Trip.findByIdAndRemove(t, (err, trip) => {
    if (err) return next(err);
  });
});

const Trip = models.Trip;

module.exports = router;