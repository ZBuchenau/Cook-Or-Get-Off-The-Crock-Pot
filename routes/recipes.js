var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json('API recipes');
});

router.get('/random', function(req, res, next) {
  res.json('API recipes/random');
});

router.get('/:id', function(req, res, next) {
  res.json('API recipes/:recipeId');
});

module.exports = router;
