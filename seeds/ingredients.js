'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('ingredients').del(),
    knex('ingredients').insert({
      name: 'ancho chile powder',
      aisle: 'Ethnic Foods'
    }), knex('ingredients').insert({
      name: 'beef tenderloin',
      aisle: 'Meat'
    }), knex('ingredients').insert({
      name: 'black pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'coarse kosher salt',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'dark brown sugar',
      aisle: 'Baking'
    }), knex('ingredients').insert({
      name: 'fresh cilantro',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'fresh mint',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'fresh parsley',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'garlic cloves',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'ground pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'lemon juice',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'red pepper',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'red wine vinegar',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'sea salt',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'shallots',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'sweet paprika',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'baking powder',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'egg',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'flour',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'sage leaves',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'salt',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'seltzer water',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'vegetable oil',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'anchovies , spine removed',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'anchovies',
      aisle: 'Seafood'
    }), knex('ingredients').insert({
      name: 'garlic clove',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'scallions',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'two 3',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'almonds',
      aisle: 'Nuts'
    }), knex('ingredients').insert({
      name: 'anchovies',
      aisle: 'Seafood'
    }), knex('ingredients').insert({
      name: 'carrots',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'cauliflower',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'extra-virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'rocket',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'garlic',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'ginger',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'korean cooking syrup',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'pine nuts',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'plum extract',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'sesame seeds',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'sugar',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'tiny dried anchovies',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'cooking oil',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'anchovies, in oil',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'pickles baby capers',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'tuscan bread',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'unsalted butter',
      aisle: '?'
    }), knex('ingredients').insert({
      name: 'anchovies',
      aisle: 'Seafood'
    }), knex('ingredients').insert({
      name: 'cayenne pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'cherry tomatoes',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'crusty bread',
      aisle: 'Bakery/Bread'
    }), knex('ingredients').insert({
      name: 'eggs',
      aisle: 'Milk, Eggs, Other Dairy'
    }), knex('ingredients').insert({
      name: 'extra virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'flour',
      aisle: 'Baking'
    }), knex('ingredients').insert({
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'salt and pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'anchovy',
      aisle: 'Seafood'
    }), knex('ingredients').insert({
      name: 'basil leaves',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'bread crumbs',
      aisle: 'Bakery/Bread'
    }), knex('ingredients').insert({
      name: 'cracked pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'extra virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'red onion',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'sherry vinegar',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'tomato',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'broccoli raab',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'garlic',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      name: 'kosher salt',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'kosher salt',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      name: 'salt packed anchovies',
      aisle: 'Canned and Jarred'
    })
  );
};
