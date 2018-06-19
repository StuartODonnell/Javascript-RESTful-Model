const express = require('express');
const router = new express.Router();

router.use('/films', require('./films.js'));
// router.use('/reviews', require('./reviews.js'));
// router.use('/reviews', require('../models.review.js'));

router.get('/', function(req, res) {
  res.json({ data: 'welcome to the film reviews site'});
});

// router.get('/about', function(req, res) {
//   res.json({ data: 'this is a site about films'});
// });

module.exports = router;
