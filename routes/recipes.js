'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  knex('recipes').select('*').then(function(recipes) {
    res.json(recipes);
  });
});

router.post('/shopping-list', function(req, res) {
  var recipes = JSON.parse(req.body.recipes);
  var recipePromises = [];
  recipes.forEach(function(element, index) {
    recipePromises.push(
      knex('recipes')
      .select('recipe_ingredients.recipe_id', 'recipe_ingredients.ingredient_id', 'ingredients.name', 'ingredients.aisle', 'recipe_ingredients.unit', 'recipe_ingredients.amount')
      .where('recipes.id', element.id)
      .leftJoin('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
      .leftJoin('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
    );
  });
  Promise.all(recipePromises)
    .then(function(ingredientsList) {
      console.log(ingredientsList);
      res.json(ingredientsList);
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
