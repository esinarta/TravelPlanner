var express = require('express');
var router = express.Router();
const models = require('../models/');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true
});

const Stay = models.Stay;

router.post('/add', async (req, res) => {
  //let user = req.session.currentUser;
  //if (user) {
    //req.body.user = user._id;
    let stay = new models.Stay(req.body);
    await stay.save();
  //} else {
    //res.redirect('/login');
  //}
});

router.post('/delete', (req, res) => {
  let s = req.body.stay_id;
  Stay.findByIdAndRemove(s, (err, stay) => {
    if (err) return next(err);
  });
});

module.exports = router;