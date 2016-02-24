// 'use strict'
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json('API recipes');
});

router.post('/shopping-list', function(req, res) {
  var recipes = req.body.recipes;
  var recipePromises = [];
  recipes.forEach(function(element, index) {
    recipePromises.push(knex('recipes')
      .select('*')
      .where('id', element.id));
    // .leftJoin('recipe_ingredients', 'recipe.id', 'recipe_ingredients.recipe_id')
    // .leftJoin('ingredients', 'recipe_ingredients.ingredients_id', 'ingredients.id'));
  });
  Promise.all(recipePromises)
    .then(function(list) {
      res.json(list);
    });

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
