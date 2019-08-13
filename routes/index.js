var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travel Planner' });
});

router.get('/register', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

module.exports = router;
