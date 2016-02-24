'use strict'
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json('API recipes');
});

<<<<<<< HEAD
router.get('/random', function(req, res, next) {
  res.json('API recipes/random');
=======
router.get('/random', function(req, res) {
  var amount = 5;//req.body.amount;
  knex.raw("SELECT * FROM recipes ORDER BY RANDOM() LIMIT " + amount).then(function(randomRecipe){
      res.json(randomRecipe.rows);
  });
>>>>>>> 1487a3908854ba8c10caad769346479c4c70de21
});

router.get('/:id', function(req, res) {
  res.json('API recipes/:recipeId');
});

module.exports = router;
