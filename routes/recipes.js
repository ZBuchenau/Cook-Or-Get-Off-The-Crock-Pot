'use strict'
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json('API recipes');
});


router.post('/random', function(req, res) {
  var amount = req.body.amount;
  knex.raw("SELECT * FROM recipes ORDER BY RANDOM() LIMIT " + amount).then(function(randomRecipe) {
    res.json(randomRecipe.rows);
  });
});

router.get('/:id', function(req, res) {
  res.json('API recipes/:recipeId');
});

module.exports = router;
