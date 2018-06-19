const films = require('../models/films.js')();
// const reviews = require('../models/reviews.js')();

const Film = require('../models/film.js');
const Review = require('../models/review.js');
const express = require('express');
const filmRouter = new express.Router();


filmRouter.get('/:id', function(req, res){
  const index = req.params.id;
  res.json({data: films[index]});
});
// the above "shows"


filmRouter.put('/:id', function(req, res){
  const index = req.params.id;
  films[index] = new Film(req.body);
  res.json({data: films});
});
// the above "updates"


filmRouter.delete('/:id', function(req, res){
  const index = req.params.id;
  films.splice(index, 1);
  res.json({data: films});
});
// the above "updates"


filmRouter.get('/', function(req, res) {
  res.json(films);
});
// the above "lists all"

filmRouter.post('/', function(req, res){
  const newFilm = new Film(req.body);
  films.push(newFilm);
  res.json({data: films});
});
// the above "creates/adds"


module.exports = filmRouter;
