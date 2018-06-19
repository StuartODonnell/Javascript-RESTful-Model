const films = require('../models/films.js')();
// const reviews = require('../models/films.js')();
const Film = require('../models/film.js');
const Review = require('../models/review.js');
const express = require('express');
const filmRouter = new express.Router();


reviewRouter.get('/:id', function(req, res){
  const index = req.params.id;
  res.json({data: reviews[index]});
});
// the above "shows"


reviewRouter.put('/:id', function(req, res){
  const index = req.params.id;
  reviews[index] = new Review(req.body);
  res.json({data: reviews});
});
// the above "updates"


reviewRouter.delete('/:id', function(req, res){
  const index = req.params.id;
  reviews.splice(index, 1);
  res.json({data: reviews});
});
// the above "updates"


reviewRouter.get('/', function(req, res) {
  res.json(reviews);
});
// the above "lists all"

reviewRouter.post('/', function(req, res){
  const newReview = new Review(req.body);
  reviews.push(newReview);
  res.json({data: reviews});
});
// the above "creates/adds"


module.exports = reviewRouter;
