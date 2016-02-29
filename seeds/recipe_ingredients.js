'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('recipe_ingredients').del(),
    
    knex('recipe_ingredients').insert({
      id: 1,
      recipe_id: 1,
      ingredient_id: 1,
      amount: 0.75,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 2,
      recipe_id: 1,
      ingredient_id: 2,
      amount: 3,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 3,
      recipe_id: 1,
      ingredient_id: 3,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 4,
      recipe_id: 1,
      ingredient_id: 4,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 5,
      recipe_id: 1,
      ingredient_id: 5,
      amount: 0.25,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 6,
      recipe_id: 1,
      ingredient_id: 6,
      amount: 2,
      unit: 'servings'
    }),
    knex('recipe_ingredients').insert({
      id: 7,
      recipe_id: 1,
      ingredient_id: 7,
      amount: 0.5,
      unit: 'lb'
    }),
    knex('recipe_ingredients').insert({
      id: 8,
      recipe_id: 1,
      ingredient_id: 8,
      amount: 0.25,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 9,
      recipe_id: 1,
      ingredient_id: 9,
      amount: 0.75,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 10,
      recipe_id: 1,
      ingredient_id: 10,
      amount: 16,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 11,
      recipe_id: 1,
      ingredient_id: 11,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 12,
      recipe_id: 1,
      ingredient_id: 12,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 13,
      recipe_id: 1,
      ingredient_id: 13,
      amount: 3,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 14,
      recipe_id: 1,
      ingredient_id: 14,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 15,
      recipe_id: 1,
      ingredient_id: 15,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 16,
      recipe_id: 2,
      ingredient_id: 16,
      amount: 1.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 17,
      recipe_id: 2,
      ingredient_id: 17,
      amount: 3.5,
      unit: 'lb'
    }),
    knex('recipe_ingredients').insert({
      id: 18,
      recipe_id: 2,
      ingredient_id: 18,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 19,
      recipe_id: 2,
      ingredient_id: 19,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 20,
      recipe_id: 2,
      ingredient_id: 20,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 21,
      recipe_id: 2,
      ingredient_id: 21,
      amount: 2,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 22,
      recipe_id: 2,
      ingredient_id: 22,
      amount: 1,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 23,
      recipe_id: 2,
      ingredient_id: 23,
      amount: 3,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 24,
      recipe_id: 2,
      ingredient_id: 24,
      amount: 3,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 25,
      recipe_id: 2,
      ingredient_id: 25,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 26,
      recipe_id: 2,
      ingredient_id: 26,
      amount: 3,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 27,
      recipe_id: 2,
      ingredient_id: 27,
      amount: 0.75,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 28,
      recipe_id: 2,
      ingredient_id: 28,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 29,
      recipe_id: 2,
      ingredient_id: 29,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 30,
      recipe_id: 2,
      ingredient_id: 30,
      amount: 3,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 31,
      recipe_id: 2,
      ingredient_id: 31,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 32,
      recipe_id: 2,
      ingredient_id: 32,
      amount: 2,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 33,
      recipe_id: 2,
      ingredient_id: 33,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 34,
      recipe_id: 3,
      ingredient_id: 34,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 35,
      recipe_id: 3,
      ingredient_id: 35,
      amount: 1,
      unit: 'serving'
    }),
    knex('recipe_ingredients').insert({
      id: 36,
      recipe_id: 3,
      ingredient_id: 36,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 37,
      recipe_id: 3,
      ingredient_id: 37,
      amount: 1,
      unit: 'serving'
    }),
    knex('recipe_ingredients').insert({
      id: 38,
      recipe_id: 4,
      ingredient_id: 38,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 39,
      recipe_id: 4,
      ingredient_id: 39,
      amount: 0.25,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 40,
      recipe_id: 4,
      ingredient_id: 40,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 41,
      recipe_id: 4,
      ingredient_id: 41,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 42,
      recipe_id: 4,
      ingredient_id: 42,
      amount: 0.25,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 43,
      recipe_id: 4,
      ingredient_id: 43,
      amount: 2,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 44,
      recipe_id: 4,
      ingredient_id: 44,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 45,
      recipe_id: 4,
      ingredient_id: 45,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 46,
      recipe_id: 4,
      ingredient_id: 46,
      amount: 1,
      unit: 'lb'
    }),
    knex('recipe_ingredients').insert({
      id: 47,
      recipe_id: 5,
      ingredient_id: 47,
      amount: 1,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 48,
      recipe_id: 5,
      ingredient_id: 48,
      amount: 4,
      unit: 'servings'
    }),
    knex('recipe_ingredients').insert({
      id: 49,
      recipe_id: 5,
      ingredient_id: 49,
      amount: 2,
      unit: 'lb'
    }),
    knex('recipe_ingredients').insert({
      id: 50,
      recipe_id: 6,
      ingredient_id: 50,
      amount: 0.25,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 51,
      recipe_id: 6,
      ingredient_id: 51,
      amount: 0.25,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 52,
      recipe_id: 6,
      ingredient_id: 52,
      amount: 24,
      unit: 'oz'
    }),
    knex('recipe_ingredients').insert({
      id: 53,
      recipe_id: 6,
      ingredient_id: 53,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 54,
      recipe_id: 6,
      ingredient_id: 54,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 55,
      recipe_id: 6,
      ingredient_id: 55,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 56,
      recipe_id: 6,
      ingredient_id: 56,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 57,
      recipe_id: 6,
      ingredient_id: 57,
      amount: 4,
      unit: 'servings'
    }),
    knex('recipe_ingredients').insert({
      id: 58,
      recipe_id: 6,
      ingredient_id: 58,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 59,
      recipe_id: 6,
      ingredient_id: 59,
      amount: 4,
      unit: 'servings'
    }),
    knex('recipe_ingredients').insert({
      id: 60,
      recipe_id: 7,
      ingredient_id: 60,
      amount: 1,
      unit: 'Cup'
    }),
    knex('recipe_ingredients').insert({
      id: 61,
      recipe_id: 7,
      ingredient_id: 61,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 62,
      recipe_id: 7,
      ingredient_id: 62,
      amount: 0.5,
      unit: 'Teaspoon'
    }),
    knex('recipe_ingredients').insert({
      id: 63,
      recipe_id: 7,
      ingredient_id: 63,
      amount: 2,
      unit: 'Teaspoons'
    }),
    knex('recipe_ingredients').insert({
      id: 64,
      recipe_id: 7,
      ingredient_id: 64,
      amount: 0.25,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 65,
      recipe_id: 7,
      ingredient_id: 65,
      amount: 4,
      unit: 'servings'
    }),
    knex('recipe_ingredients').insert({
      id: 66,
      recipe_id: 8,
      ingredient_id: 66,
      amount: 2,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 67,
      recipe_id: 8,
      ingredient_id: 67,
      amount: 1,
      unit: 'Tablespoon'
    }),
    knex('recipe_ingredients').insert({
      id: 68,
      recipe_id: 8,
      ingredient_id: 68,
      amount: 2,
      unit: 'Cups'
    }),
    knex('recipe_ingredients').insert({
      id: 69,
      recipe_id: 8,
      ingredient_id: 69,
      amount: 2,
      unit: 'Cups'
    }),
    knex('recipe_ingredients').insert({
      id: 70,
      recipe_id: 8,
      ingredient_id: 70,
      amount: 2,
      unit: 'Teaspoons'
    }),
    knex('recipe_ingredients').insert({
      id: 71,
      recipe_id: 8,
      ingredient_id: 71,
      amount: 4,
      unit: 'Teaspoons'
    }),
    knex('recipe_ingredients').insert({
      id: 72,
      recipe_id: 8,
      ingredient_id: 72,
      amount: 1,
      unit: 'Cup'
    }),
    knex('recipe_ingredients').insert({
      id: 73,
      recipe_id: 8,
      ingredient_id: 73,
      amount: 6,
      unit: 'Cups'
    }),
    knex('recipe_ingredients').insert({
      id: 74,
      recipe_id: 8,
      ingredient_id: 74,
      amount: 3,
      unit: 'Cups'
    }),
    knex('recipe_ingredients').insert({
      id: 75,
      recipe_id: 8,
      ingredient_id: 75,
      amount: 2,
      unit: 'Teaspoons'
    }),
    knex('recipe_ingredients').insert({
      id: 76,
      recipe_id: 8,
      ingredient_id: 76,
      amount: 2,
      unit: 'Cups'
    }),
    knex('recipe_ingredients').insert({
      id: 77,
      recipe_id: 8,
      ingredient_id: 77,
      amount: 2,
      unit: 'Cups'
    }),
    knex('recipe_ingredients').insert({
      id: 78,
      recipe_id: 8,
      ingredient_id: 78,
      amount: 2,
      unit: 'Teaspoons'
    }),
    knex('recipe_ingredients').insert({
      id: 79,
      recipe_id: 8,
      ingredient_id: 79,
      amount: 0.25,
      unit: 'Cup'
    }),
    knex('recipe_ingredients').insert({
      id: 80,
      recipe_id: 9,
      ingredient_id: 80,
      amount: 0.25,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 81,
      recipe_id: 9,
      ingredient_id: 81,
      amount: 1.5,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 82,
      recipe_id: 9,
      ingredient_id: 82,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 83,
      recipe_id: 9,
      ingredient_id: 83,
      amount: 0.5,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 84,
      recipe_id: 9,
      ingredient_id: 84,
      amount: 3,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 85,
      recipe_id: 9,
      ingredient_id: 85,
      amount: 0.25,
      unit: 'lb'
    }),
    knex('recipe_ingredients').insert({
      id: 86,
      recipe_id: 9,
      ingredient_id: 86,
      amount: 4,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 87,
      recipe_id: 9,
      ingredient_id: 87,
      amount: 0.25,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 88,
      recipe_id: 9,
      ingredient_id: 88,
      amount: 1.5,
      unit: 'oz'
    }),
    knex('recipe_ingredients').insert({
      id: 89,
      recipe_id: 9,
      ingredient_id: 89,
      amount: 1,
      unit: 'oz'
    }),
    knex('recipe_ingredients').insert({
      id: 90,
      recipe_id: 9,
      ingredient_id: 90,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 91,
      recipe_id: 9,
      ingredient_id: 91,
      amount: 6,
      unit: 'oz'
    }),
    knex('recipe_ingredients').insert({
      id: 92,
      recipe_id: 9,
      ingredient_id: 92,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 93,
      recipe_id: 9,
      ingredient_id: 93,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 94,
      recipe_id: 9,
      ingredient_id: 94,
      amount: 2.5,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 95,
      recipe_id: 9,
      ingredient_id: 95,
      amount: 0.5,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 96,
      recipe_id: 10,
      ingredient_id: 96,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 97,
      recipe_id: 10,
      ingredient_id: 97,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 98,
      recipe_id: 10,
      ingredient_id: 98,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 99,
      recipe_id: 10,
      ingredient_id: 99,
      amount: 0.5,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 100,
      recipe_id: 10,
      ingredient_id: 100,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 101,
      recipe_id: 10,
      ingredient_id: 101,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 102,
      recipe_id: 10,
      ingredient_id: 102,
      amount: 1,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 103,
      recipe_id: 10,
      ingredient_id: 103,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 104,
      recipe_id: 10,
      ingredient_id: 104,
      amount: 24,
      unit: 'oz'
    }),
    knex('recipe_ingredients').insert({
      id: 105,
      recipe_id: 10,
      ingredient_id: 105,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 106,
      recipe_id: 11,
      ingredient_id: 106,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 107,
      recipe_id: 11,
      ingredient_id: 107,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 108,
      recipe_id: 11,
      ingredient_id: 108,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 109,
      recipe_id: 11,
      ingredient_id: 109,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 110,
      recipe_id: 11,
      ingredient_id: 110,
      amount: 2,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 111,
      recipe_id: 11,
      ingredient_id: 111,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 112,
      recipe_id: 11,
      ingredient_id: 112,
      amount: 0.5,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 113,
      recipe_id: 11,
      ingredient_id: 113,
      amount: 1,
      unit: 'lb'
    }),
    knex('recipe_ingredients').insert({
      id: 114,
      recipe_id: 11,
      ingredient_id: 114,
      amount: 4,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 115,
      recipe_id: 11,
      ingredient_id: 115,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 116,
      recipe_id: 11,
      ingredient_id: 116,
      amount: 0.25,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 117,
      recipe_id: 12,
      ingredient_id: 117,
      amount: 1.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 118,
      recipe_id: 12,
      ingredient_id: 118,
      amount: 3.5,
      unit: 'lb'
    }),
    knex('recipe_ingredients').insert({
      id: 119,
      recipe_id: 12,
      ingredient_id: 119,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 120,
      recipe_id: 12,
      ingredient_id: 120,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 121,
      recipe_id: 12,
      ingredient_id: 121,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 122,
      recipe_id: 12,
      ingredient_id: 122,
      amount: 2,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 123,
      recipe_id: 12,
      ingredient_id: 123,
      amount: 1,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 124,
      recipe_id: 12,
      ingredient_id: 124,
      amount: 3,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 125,
      recipe_id: 12,
      ingredient_id: 125,
      amount: 3,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 126,
      recipe_id: 12,
      ingredient_id: 126,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 127,
      recipe_id: 12,
      ingredient_id: 127,
      amount: 3,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 128,
      recipe_id: 12,
      ingredient_id: 128,
      amount: 0.75,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 129,
      recipe_id: 12,
      ingredient_id: 129,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 130,
      recipe_id: 12,
      ingredient_id: 130,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 131,
      recipe_id: 12,
      ingredient_id: 131,
      amount: 3,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 132,
      recipe_id: 12,
      ingredient_id: 132,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 133,
      recipe_id: 12,
      ingredient_id: 133,
      amount: 2,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 134,
      recipe_id: 12,
      ingredient_id: 134,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 135,
      recipe_id: 13,
      ingredient_id: 135,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 136,
      recipe_id: 13,
      ingredient_id: 136,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 137,
      recipe_id: 13,
      ingredient_id: 137,
      amount: 1,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 138,
      recipe_id: 13,
      ingredient_id: 138,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 139,
      recipe_id: 13,
      ingredient_id: 139,
      amount: 1,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 140,
      recipe_id: 13,
      ingredient_id: 140,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 141,
      recipe_id: 13,
      ingredient_id: 141,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 142,
      recipe_id: 13,
      ingredient_id: 142,
      amount: 1,
      unit: 'lb'
    }),
    knex('recipe_ingredients').insert({
      id: 143,
      recipe_id: 14,
      ingredient_id: 143,
      amount: 6,
      unit: 'oz'
    }),
    knex('recipe_ingredients').insert({
      id: 144,
      recipe_id: 14,
      ingredient_id: 144,
      amount: 0.5,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 145,
      recipe_id: 14,
      ingredient_id: 145,
      amount: 2,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 146,
      recipe_id: 14,
      ingredient_id: 146,
      amount: 2,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 147,
      recipe_id: 14,
      ingredient_id: 147,
      amount: 2,
      unit: 'ozslices'
    }),
    knex('recipe_ingredients').insert({
      id: 148,
      recipe_id: 15,
      ingredient_id: 148,
      amount: 1,
      unit: 'handful'
    }),
    knex('recipe_ingredients').insert({
      id: 149,
      recipe_id: 15,
      ingredient_id: 149,
      amount: 0.8,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 150,
      recipe_id: 15,
      ingredient_id: 150,
      amount: 2,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 151,
      recipe_id: 15,
      ingredient_id: 151,
      amount: 1,
      unit: 'serving'
    }),
    knex('recipe_ingredients').insert({
      id: 152,
      recipe_id: 15,
      ingredient_id: 152,
      amount: 3,
      unit: 'tbs'
    }),
    knex('recipe_ingredients').insert({
      id: 153,
      recipe_id: 15,
      ingredient_id: 153,
      amount: 50,
      unit: 'gr'
    }),
    knex('recipe_ingredients').insert({
      id: 154,
      recipe_id: 16,
      ingredient_id: 154,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 155,
      recipe_id: 16,
      ingredient_id: 155,
      amount: 0.5,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 156,
      recipe_id: 16,
      ingredient_id: 156,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 157,
      recipe_id: 16,
      ingredient_id: 157,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 158,
      recipe_id: 16,
      ingredient_id: 158,
      amount: 1.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 159,
      recipe_id: 16,
      ingredient_id: 159,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 160,
      recipe_id: 16,
      ingredient_id: 160,
      amount: 1,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 161,
      recipe_id: 16,
      ingredient_id: 161,
      amount: 150,
      unit: 'g'
    }),
    knex('recipe_ingredients').insert({
      id: 162,
      recipe_id: 16,
      ingredient_id: 162,
      amount: 2,
      unit: 'T'
    }),
    knex('recipe_ingredients').insert({
      id: 163,
      recipe_id: 17,
      ingredient_id: 163,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 164,
      recipe_id: 17,
      ingredient_id: 164,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 165,
      recipe_id: 17,
      ingredient_id: 165,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 166,
      recipe_id: 17,
      ingredient_id: 166,
      amount: 1,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 167,
      recipe_id: 18,
      ingredient_id: 167,
      amount: 1,
      unit: 'lb'
    }),
    knex('recipe_ingredients').insert({
      id: 168,
      recipe_id: 18,
      ingredient_id: 168,
      amount: 0.25,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 169,
      recipe_id: 18,
      ingredient_id: 169,
      amount: 0,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 170,
      recipe_id: 18,
      ingredient_id: 170,
      amount: 0,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 171,
      recipe_id: 18,
      ingredient_id: 171,
      amount: 3,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 172,
      recipe_id: 18,
      ingredient_id: 172,
      amount: 0,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 173,
      recipe_id: 18,
      ingredient_id: 173,
      amount: 1.5,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 174,
      recipe_id: 18,
      ingredient_id: 174,
      amount: 2,
      unit: 'c'
    }),
    knex('recipe_ingredients').insert({
      id: 175,
      recipe_id: 18,
      ingredient_id: 175,
      amount: 0,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 176,
      recipe_id: 19,
      ingredient_id: 176,
      amount: 3,
      unit: 'fillet'
    }),
    knex('recipe_ingredients').insert({
      id: 177,
      recipe_id: 19,
      ingredient_id: 177,
      amount: 2,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 178,
      recipe_id: 19,
      ingredient_id: 178,
      amount: 1,
      unit: 'Tbsp'
    }),
    knex('recipe_ingredients').insert({
      id: 179,
      recipe_id: 19,
      ingredient_id: 179,
      amount: 1,
      unit: 'serving'
    }),
    knex('recipe_ingredients').insert({
      id: 180,
      recipe_id: 19,
      ingredient_id: 180,
      amount: 2,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 181,
      recipe_id: 19,
      ingredient_id: 181,
      amount: 0.125,
      unit: 'null'
    }),
    knex('recipe_ingredients').insert({
      id: 182,
      recipe_id: 19,
      ingredient_id: 182,
      amount: 0.5,
      unit: 't'
    }),
    knex('recipe_ingredients').insert({
      id: 183,
      recipe_id: 19,
      ingredient_id: 183,
      amount: 2,
      unit: 'slices'
    }),
    knex('recipe_ingredients').insert({
      id: 184,
      recipe_id: 20,
      ingredient_id: 184,
      amount: 1,
      unit: 'bunch'
    }),
    knex('recipe_ingredients').insert({
      id: 185,
      recipe_id: 20,
      ingredient_id: 185,
      amount: 1,
      unit: 'clove'
    }),
    knex('recipe_ingredients').insert({
      id: 186,
      recipe_id: 20,
      ingredient_id: 186,
      amount: 1,
      unit: 'Tbs'
    }),
    knex('recipe_ingredients').insert({
      id: 187,
      recipe_id: 20,
      ingredient_id: 187,
      amount: 4,
      unit: 'servings'
    }),
    knex('recipe_ingredients').insert({
      id: 188,
      recipe_id: 20,
      ingredient_id: 188,
      amount: 4,
      unit: 'Tbs'
    }),
    knex('recipe_ingredients').insert({
      id: 189,
      recipe_id: 20,
      ingredient_id: 189,
      amount: 3,
      unit: 'null'
    })
  );
};
