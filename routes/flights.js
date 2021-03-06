var express = require('express');
var router = express.Router();
const models = require('../models/');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true
});

const Flight = models.Flight;

router.post('/add', async (req, res) => {
  let user = req.session.currentUser;
  //if (user) {
    //req.body.user = user._id;
    let flight = new models.Flight(req.body);
    await flight.save();
  //} else {
    //res.redirect('/login');
  //}
});

router.post('/delete', (req, res) => {
  let f = req.body.flight_id;
  Flight.findByIdAndRemove(f, (err, flight) => {
    if (err) return next(err);
  });
});

module.exports = router;