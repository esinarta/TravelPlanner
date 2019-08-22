var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travel Planner' });
});

router.get('/register', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/add_stay', function(req, res, next) {
  res.render('add_stay', { title: 'Add Stay' });
});

router.get('/add_flight', function(req, res, next) {
  res.render('add_flight', { title: 'Add Flight' });
});

router.get('/add_trip', function(req, res, next) {
  res.render('add_trip', { title: 'Add Trip' });
});

module.exports = router;
