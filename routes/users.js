var express = require('express');
var router = express.Router();
const models = require('../models/');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true
});

const User = models.User;

router.post('/', (req, res) => {
  let user = new models.User(req.body);
  user.save();
})

/* get users */
router.get('/', function(req, res) {
  User.find({'email': 'a@a.com'}, (err, res) => {
    if (err) {
      return err;
    }
    else {
      res.json();
    }
  });
});

module.exports = router;
