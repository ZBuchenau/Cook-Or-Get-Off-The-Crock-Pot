'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('ingredients').del(),
    knex('ingredients').insert({
      id: 1,
      name: 'ancho chile powder',
      aisle: 'Ethnic Foods'
    }), knex('ingredients').insert({
      id: 2,
      name: 'beef tenderloin',
      aisle: 'Meat'
    }), knex('ingredients').insert({
      id: 3,
      name: 'black pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 4,
      name: 'coarse kosher salt',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 5,
      name: 'dark brown sugar',
      aisle: 'Baking'
    }), knex('ingredients').insert({
      id: 6,
      name: 'fresh cilantro',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 7,
      name: 'fresh mint',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 8,
      name: 'fresh parsley',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 9,
      name: 'garlic cloves',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 10,
      name: 'ground pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 11,
      name: 'lemon juice',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 12,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 13,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 14,
      name: 'red pepper',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 15,
      name: 'red wine vinegar',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 16,
      name: 'sea salt',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 17,
      name: 'shallots',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 18,
      name: 'sweet paprika',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 19,
      name: 'baking powder',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 20,
      name: 'egg',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 21,
      name: 'flour',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 22,
      name: 'sage leaves',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 23,
      name: 'salt',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 24,
      name: 'seltzer water',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 25,
      name: 'vegetable oil',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 26,
      name: 'anchovies , spine removed',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 27,
      name: 'anchovies',
      aisle: 'Seafood'
    }), knex('ingredients').insert({
      id: 28,
      name: 'garlic clove',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 29,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 30,
      name: 'scallions',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 31,
      name: 'two 3',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 32,
      name: 'almonds',
      aisle: 'Nuts'
    }), knex('ingredients').insert({
      id: 33,
      name: 'anchovies',
      aisle: 'Seafood'
    }), knex('ingredients').insert({
      id: 34,
      name: 'carrots',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 35,
      name: 'cauliflower',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 36,
      name: 'extra-virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 37,
      name: 'rocket',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 38,
      name: 'garlic',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 39,
      name: 'ginger',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 40,
      name: 'korean cooking syrup',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 41,
      name: 'pine nuts',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 42,
      name: 'plum extract',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 43,
      name: 'sesame seeds',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 44,
      name: 'sugar',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 45,
      name: 'tiny dried anchovies',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 46,
      name: 'cooking oil',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 47,
      name: 'anchovies, in oil',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 48,
      name: 'pickles baby capers',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 49,
      name: 'tuscan bread',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 50,
      name: 'unsalted butter',
      aisle: '?'
    }), knex('ingredients').insert({
      id: 51,
      name: 'anchovies',
      aisle: 'Seafood'
    }), knex('ingredients').insert({
      id: 52,
      name: 'cayenne pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 53,
      name: 'cherry tomatoes',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 54,
      name: 'crusty bread',
      aisle: 'Bakery/Bread'
    }), knex('ingredients').insert({
      id: 55,
      name: 'eggs',
      aisle: 'Milk, Eggs, Other Dairy'
    }), knex('ingredients').insert({
      id: 56,
      name: 'extra virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 57,
      name: 'flour',
      aisle: 'Baking'
    }), knex('ingredients').insert({
      id: 58,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 59,
      name: 'salt and pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 60,
      name: 'anchovy',
      aisle: 'Seafood'
    }), knex('ingredients').insert({
      id: 61,
      name: 'basil leaves',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 62,
      name: 'bread crumbs',
      aisle: 'Bakery/Bread'
    }), knex('ingredients').insert({
      id: 63,
      name: 'cracked pepper',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 64,
      name: 'extra virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 65,
      name: 'red onion',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 66,
      name: 'sherry vinegar',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 67,
      name: 'tomato',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 68,
      name: 'broccoli raab',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 69,
      name: 'garlic',
      aisle: 'Produce'
    }), knex('ingredients').insert({
      id: 70,
      name: 'kosher salt',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 71,
      name: 'kosher salt',
      aisle: 'Spices and Seasonings'
    }), knex('ingredients').insert({
      id: 72,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }), knex('ingredients').insert({
      id: 73,
      name: 'salt packed anchovies',
      aisle: 'Canned and Jarred'
    })
  );
};
