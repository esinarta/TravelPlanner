var express = require('express');
var router = express.Router();
const models = require('../models/');
const mongoose = require("mongoose");

const Flight = models.Flight;
const Stay = models.Stay;
const Trip = models.Trip;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travel Planner' });
});

router.get('/dashboard', async (req, res, next) => {
  const flights = await Flight.find({
    //user: user._id
  });

  const stays = await Stay.find({
    //user: user._id
  });

  const trips = await Trip.find({});

  res.render('dashboard', { 
    title: 'Dashboard',
    flights: flights,
    stays: stays,
    trips: trips
  });
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

router.get('/add_trip', async (req, res, next) => {
  const flights = await Flight.find({
    //user: user._id
  });

  const stays = await Stay.find({
    //user: user._id
  });

  res.render('add_trip', { 
    title: 'Add Trip',
    flights: flights,
    stays: stays
  });
});

router.get('/my_trips', async (req, res, next) => {
  const flights = await Flight.find({
    //user: user._id
  });

  const stays = await Stay.find({
    //user: user._id
  });

  const trips = await Trip.find({});

  res.render('my_trips', { 
    title: 'My Trips',
    flights: flights,
    stays: stays,
    trips: trips
  });
});

router.get('/my_flights', async (req, res, next) => {
  const flights = await Flight.find({
    //user: user._id
  });

  res.render('my_flights', { 
    title: 'My Flights',
    flights: flights
  });
});

router.get('/my_stays', async (req, res, next) => {
  const stays = await Stay.find({
    //user: user._id
  });

  res.render('my_stays', { 
    title: 'My Stays',
    stays: stays
  });
});

module.exports = router;
