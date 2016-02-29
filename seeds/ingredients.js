'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('ingredients').del(),

    // Inserts seed entries

    knex('ingredients').insert({
      id: 1,
      name: 'cayenne',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 2,
      name: 'celery',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 3,
      name: 'dry mustard',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 4,
      name: 'egg',
      aisle: 'Milk, Eggs, Other Dairy'
    }),
    knex('ingredients').insert({
      id: 5,
      name: 'green bell pepper',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 6,
      name: 'lemon wedges',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 7,
      name: 'lump crabmeat',
      aisle: 'Seafood'
    }),
    knex('ingredients').insert({
      id: 8,
      name: 'onion',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 9,
      name: 'salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 10,
      name: 'saltines',
      aisle: 'Savory Snacks'
    }),
    knex('ingredients').insert({
      id: 11,
      name: 'scallion greens',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 12,
      name: 'sour cream',
      aisle: 'Milk, Eggs, Other Dairy'
    }),
    knex('ingredients').insert({
      id: 13,
      name: 'unsalted butter',
      aisle: 'Milk, Eggs, Other Dairy'
    }),
    knex('ingredients').insert({
      id: 14,
      name: 'vegetable oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 15,
      name: 'worcestershire sauce',
      aisle: 'Condiments'
    }),
    knex('ingredients').insert({
      id: 16,
      name: 'ancho chile powder',
      aisle: 'Ethnic Foods'
    }),
    knex('ingredients').insert({
      id: 17,
      name: 'beef tenderloin',
      aisle: 'Meat'
    }),
    knex('ingredients').insert({
      id: 18,
      name: 'black pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 19,
      name: 'coarse kosher salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 20,
      name: 'dark brown sugar',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 21,
      name: 'fresh cilantro',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 22,
      name: 'fresh mint',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 23,
      name: 'fresh parsley',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 24,
      name: 'garlic cloves',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 25,
      name: 'ground pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 26,
      name: 'lemon juice',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 27,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 28,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 29,
      name: 'red pepper',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 30,
      name: 'red wine vinegar',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 31,
      name: 'sea salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 32,
      name: 'shallots',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 33,
      name: 'sweet paprika',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 34,
      name: 'ketchup',
      aisle: 'Condiments'
    }),
    knex('ingredients').insert({
      id: 35,
      name: 'lemon juice',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 36,
      name: 'mayonnaise',
      aisle: 'Condiments'
    }),
    knex('ingredients').insert({
      id: 37,
      name: 'worcestershire sauce',
      aisle: 'Condiments'
    }),
    knex('ingredients').insert({
      id: 38,
      name: 'canola oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 39,
      name: 'fresh cilantro leaves',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 40,
      name: 'ground cumin',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 41,
      name: 'jalapeno chile',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 42,
      name: 'limeade concentrate',
      aisle: 'Frozen'
    }),
    knex('ingredients').insert({
      id: 43,
      name: 'poblano chiles',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 44,
      name: 'red onion',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 45,
      name: 'salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 46,
      name: 'tomatillos',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 47,
      name: 'heavy cream',
      aisle: 'Milk, Eggs, Other Dairy'
    }),
    knex('ingredients').insert({
      id: 48,
      name: 'Salt & Pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 49,
      name: 'spinach leaves',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 50,
      name: 'butter',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 51,
      name: 'dry white wine',
      aisle: 'Alcoholic Beverages'
    }),
    knex('ingredients').insert({
      id: 52,
      name: 'grouper fillets',
      aisle: 'Seafood'
    }),
    knex('ingredients').insert({
      id: 53,
      name: 'honey',
      aisle: 'Health Foods'
    }),
    knex('ingredients').insert({
      id: 54,
      name: 'mango',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 55,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 56,
      name: 'red pepper flakes',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 57,
      name: 'sea salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 58,
      name: 'shallot',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 59,
      name: 'white pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 60,
      name: 'all purpose flour',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 61,
      name: 'apple',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 62,
      name: 'cardamom powder',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 63,
      name: 'ghee',
      aisle: 'Ethnic Foods'
    }),
    knex('ingredients').insert({
      id: 64,
      name: 'milk',
      aisle: 'Milk, Eggs, Other Dairy'
    }),
    knex('ingredients').insert({
      id: 65,
      name: 'powdered milk',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 66,
      name: 'all purpose flour',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 67,
      name: 'baking soda',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 68,
      name: 'brown sugar',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 69,
      name: 'butter',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 70,
      name: 'cinnamon',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 71,
      name: 'Ener-G egg replacer',
      aisle: 'Health Foods'
    }),
    knex('ingredients').insert({
      id: 72,
      name: 'granulated sugar',
      aisle: 'Health Foods'
    }),
    knex('ingredients').insert({
      id: 73,
      name: 'quick cooking oats',
      aisle: 'Cereal'
    }),
    knex('ingredients').insert({
      id: 74,
      name: 'raisins',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 75,
      name: 'salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 76,
      name: 'semi sweet chocolate chips',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 77,
      name: 'unsweetened coconut',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 78,
      name: 'vanilla extract',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 79,
      name: 'water',
      aisle: 'Beverages'
    }),
    knex('ingredients').insert({
      id: 80,
      name: 'black pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 81,
      name: 'cherry tomatoes',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 82,
      name: 'dijon mustard',
      aisle: 'Condiments'
    }),
    knex('ingredients').insert({
      id: 83,
      name: 'fresh basil',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 84,
      name: 'garlic cloves',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 85,
      name: 'haricots verts',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 86,
      name: 'kalamata olives',
      aisle: 'Canned and Jarred'
    }),
    knex('ingredients').insert({
      id: 87,
      name: 'kosher salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 88,
      name: 'mozzarella',
      aisle: 'Cheese'
    }),
    knex('ingredients').insert({
      id: 89,
      name: 'prosciutto',
      aisle: 'Meat'
    }),
    knex('ingredients').insert({
      id: 90,
      name: 'red bell pepper',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 91,
      name: 'rotini',
      aisle: 'Pasta and Rice'
    }),
    knex('ingredients').insert({
      id: 92,
      name: 'shallot',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 93,
      name: 'water',
      aisle: 'Beverages'
    }),
    knex('ingredients').insert({
      id: 94,
      name: 'white balsamic vinegar',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 95,
      name: 'yellow bell pepper',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 96,
      name: 'black pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 97,
      name: 'cedar plank',
      aisle: 'Gourmet'
    }),
    knex('ingredients').insert({
      id: 98,
      name: 'fresh cilantro',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 99,
      name: 'kiwifruit',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 100,
      name: 'kosher salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 101,
      name: 'lime juice',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 102,
      name: 'mango',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 103,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 104,
      name: 'salmon fillets',
      aisle: 'Seafood'
    }),
    knex('ingredients').insert({
      id: 105,
      name: 'serrano chile',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 106,
      name: 'black pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 107,
      name: 'dried rosemary',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 108,
      name: 'dried thyme',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 109,
      name: 'extra virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 110,
      name: 'garlic cloves',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 111,
      name: 'garlic powder',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 112,
      name: 'heavy cream',
      aisle: 'Milk, Eggs, Other Dairy'
    }),
    knex('ingredients').insert({
      id: 113,
      name: 'mushroom',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 114,
      name: 'pork chops',
      aisle: 'Meat'
    }),
    knex('ingredients').insert({
      id: 115,
      name: 'sea salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 116,
      name: 'white wine',
      aisle: 'Alcoholic Beverages'
    }),
    knex('ingredients').insert({
      id: 117,
      name: 'ancho chile powder',
      aisle: 'Ethnic Foods'
    }),
    knex('ingredients').insert({
      id: 118,
      name: 'beef tenderloin',
      aisle: 'Meat'
    }),
    knex('ingredients').insert({
      id: 119,
      name: 'black pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 120,
      name: 'coarse kosher salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 121,
      name: 'dark brown sugar',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 122,
      name: 'fresh cilantro',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 123,
      name: 'fresh mint',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 124,
      name: 'fresh parsley',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 125,
      name: 'garlic cloves',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 126,
      name: 'ground pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 127,
      name: 'lemon juice',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 128,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 129,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 130,
      name: 'red pepper',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 131,
      name: 'red wine vinegar',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 132,
      name: 'sea salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 133,
      name: 'shallots',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 134,
      name: 'sweet paprika',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 135,
      name: 'baking powder',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 136,
      name: 'egg',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 137,
      name: 'flour',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 138,
      name: 'sage leaves',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 139,
      name: 'salt',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 140,
      name: 'seltzer water',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 141,
      name: 'vegetable oil',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 142,
      name: 'anchovies , spine removed',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 143,
      name: 'anchovies',
      aisle: 'Seafood'
    }),
    knex('ingredients').insert({
      id: 144,
      name: 'garlic clove',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 145,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 146,
      name: 'scallions',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 147,
      name: 'two 3',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 148,
      name: 'almonds',
      aisle: 'Nuts'
    }),
    knex('ingredients').insert({
      id: 149,
      name: 'anchovies',
      aisle: 'Seafood'
    }),
    knex('ingredients').insert({
      id: 150,
      name: 'carrots',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 151,
      name: 'cauliflower',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 152,
      name: 'extra-virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 153,
      name: 'rocket',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 154,
      name: 'garlic',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 155,
      name: 'ginger',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 156,
      name: 'korean cooking syrup',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 157,
      name: 'pine nuts',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 158,
      name: 'plum extract',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 159,
      name: 'sesame seeds',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 160,
      name: 'sugar',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 161,
      name: 'tiny dried anchovies',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 162,
      name: 'cooking oil',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 163,
      name: 'anchovies, in oil',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 164,
      name: 'pickles baby capers',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 165,
      name: 'tuscan bread',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 166,
      name: 'unsalted butter',
      aisle: '?'
    }),
    knex('ingredients').insert({
      id: 167,
      name: 'anchovies',
      aisle: 'Seafood'
    }),
    knex('ingredients').insert({
      id: 168,
      name: 'cayenne pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 169,
      name: 'cherry tomatoes',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 170,
      name: 'crusty bread',
      aisle: 'Bakery/Bread'
    }),
    knex('ingredients').insert({
      id: 171,
      name: 'eggs',
      aisle: 'Milk, Eggs, Other Dairy'
    }),
    knex('ingredients').insert({
      id: 172,
      name: 'extra virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 173,
      name: 'flour',
      aisle: 'Baking'
    }),
    knex('ingredients').insert({
      id: 174,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 175,
      name: 'salt and pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 176,
      name: 'anchovy',
      aisle: 'Seafood'
    }),
    knex('ingredients').insert({
      id: 177,
      name: 'basil leaves',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 178,
      name: 'bread crumbs',
      aisle: 'Bakery/Bread'
    }),
    knex('ingredients').insert({
      id: 179,
      name: 'cracked pepper',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 180,
      name: 'extra virgin olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 181,
      name: 'red onion',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 182,
      name: 'sherry vinegar',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 183,
      name: 'tomato',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 184,
      name: 'broccoli raab',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 185,
      name: 'garlic',
      aisle: 'Produce'
    }),
    knex('ingredients').insert({
      id: 186,
      name: 'kosher salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 187,
      name: 'kosher salt',
      aisle: 'Spices and Seasonings'
    }),
    knex('ingredients').insert({
      id: 188,
      name: 'olive oil',
      aisle: 'Oil, Vinegar, Salad Dressing'
    }),
    knex('ingredients').insert({
      id: 189,
      name: 'salt packed anchovies',
      aisle: 'Canned and Jarred'
    })
  );
};
