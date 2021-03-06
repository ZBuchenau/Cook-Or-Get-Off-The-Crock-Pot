var convert = require('convert-units');

function normalize(arr) {
  var recipesArr = arr;
  var len = recipesArr.length;
  var ingredients = [];
  var ingObj = {};
  for (var i = 0; i < len; i++) {
    var recipeingredients = recipesArr[i];
    for (var c = 0; c < recipeingredients.length; c++) {

      var name = recipeingredients[c].name.trim();
      var amount = parseInt(recipeingredients[c].amount);
      var unit = recipeingredients[c].unit;
      var aisle = recipeingredients[c].aisle;

      //need to account for unti conversions
      var converted = unitConverter(unit, amount);

      if (compareName(name, ingredients)) {
        var obj = {};
        ingObj[name] = {};
        ingObj[name].amount = converted.amount;
        ingObj[name].unit = converted.unit;
        ingObj[name].aisle = aisle;

        ingredients.push(name);

      } else {
        var plural = name + 's';
        var singular = name.slice(0, -1);
        if (plural in ingObj) {
          ingObj[plural].amount += converted.amount;
        }
        if (name in ingObj) {
          ingObj[name].amount += converted.amount;
        }
        if (singular in ingObj) {
          ingObj[singular].amount += converted.amount;
        }
      }

    }
  }
  return sortedObject(ingObj);
}

function sortedObject(obj) {
  var obj = obj;
  var sortedObj = {};
  Object.keys(obj)
    .sort()
    .forEach(function(value, index) {
      sortedObj[value] = value;
      sortedObj[value] = obj[value];
    });
  return sortedObj;
}

function compareName(name, ingredientsArr) {

  // loop through ingredients array
  var isUnique = true;
  var ingredientName = name;
  var ingredients = ingredientsArr;
  var len = ingredients.length;
  //compare name to objects in array to see if it's unique or not.
  for (var i = 0; i < len; i++) {
    var singular = ingredients[i].slice(0, -1);
    if (singular === ingredientName || ingredientName === ingredients[i] || (ingredientName) === ingredients[i] + 's') {
      isUnique = false;
    }
  }
  return isUnique;
}

function unitConverter(unit, amount) {
  var converted = {};
  if (!unit || unit === 'null' || unit === 'undefined') {

    converted.unit = '';
    converted.amount = amount;

  } else if (unit === 'T' || unit.toLowerCase() === 'tbsp' || unit.toLowerCase === 'tbsps' || unit.toLowerCase() === 'tablespoon' || unit.toLowerCase() === 'tablespoons') {

    converted.amount = Math.ceil(convert(amount).from('Tbs').to('fl-oz'));
    converted.unit = 'fl-oz';

  } else if (unit === 't' || unit.toLowerCase() === 'tsp' || unit.toLowerCase() === 'tsps' || unit.toLowerCase() === 'teaspoon' || unit.toLowerCase() === 'teaspoons') {

    converted.amount = Math.ceil(convert(amount).from('tsp').to('fl-oz'));
    converted.unit = 'fl-oz';

  } else if (unit === 'c' || unit.toLowerCase() === 'cups' || unit.toLowerCase() === 'cup') {

    converted.amount = Math.ceil(convert(amount).from('cup').to('fl-oz'));
    converted.unit = 'fl-oz';

  } else if (unit === 'lb' || unit === 'lbs' || unit === 'pound' || unit === 'pounds' || unit === 'lb.' || unit === 'lbs.') {

    converted.amount = Math.ceil(convert(amount).from('lb').to('oz'));
    converted.unit = 'oz';

  } else if (unit === 'g' || unit === 'gr' || unit === 'grams' || unit === 'gram') {

    converted.amount = Math.ceil(convert(amount).from('g').to('oz'));
    converted.unit = 'oz';

  } else {

    converted.amount = amount;
    converted.unit = unit;

  }

  return converted;
}

module.exports = normalize;


var data = [
  [{
    recipe_id: 5,
    ingredient_id: 38,
    name: 'garlic',
    aisle: '?',
    unit: 'T',
    amount: '2.00'
  }, {
    recipe_id: 5,
    ingredient_id: 38,
    name: 'garlic',
    aisle: '?',
    unit: 'T',
    amount: '5000'
  }, {
    recipe_id: 5,
    ingredient_id: 39,
    name: 'ginger',
    aisle: '?',
    unit: 'null',
    amount: '0.50'
  }, {
    recipe_id: 5,
    ingredient_id: 40,
    name: 'korean cooking syrup',
    aisle: '?',
    unit: 'T',
    amount: '1.00'
  }, {
    recipe_id: 5,
    ingredient_id: 41,
    name: 'pine nuts',
    aisle: '?',
    unit: 'T',
    amount: '2.00'
  }, {
    recipe_id: 5,
    ingredient_id: 42,
    name: 'plum extract',
    aisle: '?',
    unit: 't',
    amount: '1.50'
  }, {
    recipe_id: 5,
    ingredient_id: 43,
    name: 'sesame seeds',
    aisle: '?',
    unit: 'T',
    amount: '2.00'
  }, {
    recipe_id: 5,
    ingredient_id: 44,
    name: 'sugar',
    aisle: '?',
    unit: 'T',
    amount: '1.00'
  }, {
    recipe_id: 5,
    ingredient_id: 45,
    name: 'tiny dried anchovies',
    aisle: '?',
    unit: 'g',
    amount: '150.00'
  }, {
    recipe_id: 5,
    ingredient_id: 46,
    name: 'cooking oil',
    aisle: '?',
    unit: 'T',
    amount: '2.00'
  }],
  [{
    recipe_id: 3,
    ingredient_id: 27,
    name: 'anchovies',
    aisle: 'Seafood',
    unit: 'oz',
    amount: '6.00'
  }, {
    recipe_id: 3,
    ingredient_id: 28,
    name: 'garlic clove',
    aisle: 'Produce',
    unit: 'null',
    amount: '0.50'
  }, {
    recipe_id: 3,
    ingredient_id: 29,
    name: 'olive oil',
    aisle: 'Oil, Vinegar, Salad Dressing',
    unit: 't',
    amount: '2.00'
  }, {
    recipe_id: 3,
    ingredient_id: 30,
    name: 'scallions',
    aisle: 'Produce',
    unit: 'null',
    amount: '2.00'
  }, {
    recipe_id: 3,
    ingredient_id: 31,
    name: 'two 3',
    aisle: '?',
    unit: 'ozslices',
    amount: '2.00'
  }],
  [{
    recipe_id: 4,
    ingredient_id: 32,
    name: 'almonds',
    aisle: 'Nuts',
    unit: 'handful',
    amount: '1.00'
  }, {
    recipe_id: 4,
    ingredient_id: 33,
    name: 'anchovies',
    aisle: 'Seafood',
    unit: 'null',
    amount: '0.80'
  }, {
    recipe_id: 4,
    ingredient_id: 34,
    name: 'carrots',
    aisle: 'Produce',
    unit: 'null',
    amount: '2.00'
  }, {
    recipe_id: 4,
    ingredient_id: 35,
    name: 'cauliflower',
    aisle: 'Produce',
    unit: 'serving',
    amount: '1.00'
  }, {
    recipe_id: 4,
    ingredient_id: 36,
    name: 'extra-virgin olive oil',
    aisle: 'Oil, Vinegar, Salad Dressing',
    unit: 'tbs',
    amount: '3.00'
  }, {
    recipe_id: 4,
    ingredient_id: 37,
    name: 'rocket',
    aisle: 'Produce',
    unit: 'gr',
    amount: '50.00'
  }],
  [{
    recipe_id: 1,
    ingredient_id: 1,
    name: 'ancho chile powder',
    aisle: 'Ethnic Foods',
    unit: 't',
    amount: '1.50'
  }, {
    recipe_id: 1,
    ingredient_id: 2,
    name: 'beef tenderloin',
    aisle: 'Meat',
    unit: 'lb',
    amount: '3.50'
  }, {
    recipe_id: 1,
    ingredient_id: 3,
    name: 'black pepper',
    aisle: 'Spices and Seasonings',
    unit: 't',
    amount: '0.50'
  }, {
    recipe_id: 1,
    ingredient_id: 4,
    name: 'coarse kosher salt',
    aisle: 'Spices and Seasonings',
    unit: 'T',
    amount: '1.00'
  }, {
    recipe_id: 1,
    ingredient_id: 5,
    name: 'dark brown sugar',
    aisle: 'Baking',
    unit: 'T',
    amount: '2.00'
  }, {
    recipe_id: 1,
    ingredient_id: 6,
    name: 'fresh cilantro',
    aisle: 'Produce',
    unit: 'c',
    amount: '2.00'
  }, {
    recipe_id: 1,
    ingredient_id: 7,
    name: 'fresh mint',
    aisle: 'Produce',
    unit: 'c',
    amount: '1.00'
  }, {
    recipe_id: 1,
    ingredient_id: 8,
    name: 'fresh parsley',
    aisle: 'Produce',
    unit: 'c',
    amount: '3.00'
  }, {
    recipe_id: 1,
    ingredient_id: 9,
    name: 'garlic cloves',
    aisle: 'Produce',
    unit: 'null',
    amount: '3.00'
  }, {
    recipe_id: 1,
    ingredient_id: 10,
    name: 'ground pepper',
    aisle: 'Spices and Seasonings',
    unit: 't',
    amount: '1.00'
  }, {
    recipe_id: 1,
    ingredient_id: 11,
    name: 'lemon juice',
    aisle: 'Produce',
    unit: 'T',
    amount: '3.00'
  }, {
    recipe_id: 1,
    ingredient_id: 12,
    name: 'olive oil',
    aisle: 'Oil, Vinegar, Salad Dressing',
    unit: 'c',
    amount: '0.75'
  }, {
    recipe_id: 1,
    ingredient_id: 13,
    name: 'olive oil',
    aisle: 'Oil, Vinegar, Salad Dressing',
    unit: 'T',
    amount: '2.00'
  }, {
    recipe_id: 1,
    ingredient_id: 14,
    name: 'red pepper',
    aisle: 'Produce',
    unit: 't',
    amount: '0.50'
  }, {
    recipe_id: 1,
    ingredient_id: 15,
    name: 'red wine vinegar',
    aisle: 'Oil, Vinegar, Salad Dressing',
    unit: 'T',
    amount: '3.00'
  }, {
    recipe_id: 1,
    ingredient_id: 16,
    name: 'sea salt',
    aisle: 'Spices and Seasonings',
    unit: 't',
    amount: '1.00'
  }, {
    recipe_id: 1,
    ingredient_id: 17,
    name: 'shallots',
    aisle: 'Produce',
    unit: 'null',
    amount: '2.00'
  }, {
    recipe_id: 1,
    ingredient_id: 18,
    name: 'sweet paprika',
    aisle: 'Spices and Seasonings',
    unit: 'T',
    amount: '1.00'
  }],
  [{
    recipe_id: 6,
    ingredient_id: 47,
    name: 'anchovies, in oil',
    aisle: '?',
    unit: 'null',
    amount: '1.00'
  }, {
    recipe_id: 6,
    ingredient_id: 48,
    name: 'pickles baby capers',
    aisle: '?',
    unit: 'null',
    amount: '1.00'
  }, {
    recipe_id: 6,
    ingredient_id: 49,
    name: 'tuscan bread',
    aisle: '?',
    unit: 'null',
    amount: '1.00'
  }, {
    recipe_id: 6,
    ingredient_id: 50,
    name: 'unsalted butter',
    aisle: '?',
    unit: 'null',
    amount: '1.00'
  }],
  [{
    recipe_id: 9,
    ingredient_id: 68,
    name: 'broccoli raab',
    aisle: 'Produce',
    unit: 'bunch',
    amount: '1.00'
  }, {
    recipe_id: 9,
    ingredient_id: 69,
    name: 'garlic',
    aisle: 'Produce',
    unit: 'clove',
    amount: '1.00'
  }, {
    recipe_id: 9,
    ingredient_id: 70,
    name: 'kosher salt',
    aisle: 'Spices and Seasonings',
    unit: 'Tbs',
    amount: '1.00'
  }, {
    recipe_id: 9,
    ingredient_id: 71,
    name: 'kosher salt',
    aisle: 'Spices and Seasonings',
    unit: 'servings',
    amount: '4.00'
  }, {
    recipe_id: 9,
    ingredient_id: 72,
    name: 'olive oil',
    aisle: 'Oil, Vinegar, Salad Dressing',
    unit: 'Tbs',
    amount: '4.00'
  }, {
    recipe_id: 9,
    ingredient_id: 73,
    name: 'salt packed anchovies',
    aisle: 'Canned and Jarred',
    unit: 'null',
    amount: '3.00'
  }],
  [{
    recipe_id: 2,
    ingredient_id: 19,
    name: 'baking powder',
    aisle: '?',
    unit: 't',
    amount: '1.00'
  }, {
    recipe_id: 2,
    ingredient_id: 20,
    name: 'egg',
    aisle: '?',
    unit: 'null',
    amount: '1.00'
  }, {
    recipe_id: 2,
    ingredient_id: 21,
    name: 'flour',
    aisle: '?',
    unit: 'c',
    amount: '1.00'
  }, {
    recipe_id: 2,
    ingredient_id: 22,
    name: 'sage leaves',
    aisle: '?',
    unit: 'null',
    amount: '1.00'
  }, {
    recipe_id: 2,
    ingredient_id: 23,
    name: 'salt',
    aisle: '?',
    unit: 't',
    amount: '1.00'
  }, {
    recipe_id: 2,
    ingredient_id: 24,
    name: 'seltzer water',
    aisle: '?',
    unit: 'null',
    amount: '1.00'
  }, {
    recipe_id: 2,
    ingredient_id: 25,
    name: 'vegetable oil',
    aisle: '?',
    unit: 'null',
    amount: '1.00'
  }, {
    recipe_id: 2,
    ingredient_id: 26,
    name: 'anchovies , spine removed',
    aisle: '?',
    unit: 'lb',
    amount: '1.00'
  }],
  [{
    recipe_id: 7,
    ingredient_id: 51,
    name: 'anchovies',
    aisle: 'Seafood',
    unit: 'lb',
    amount: '1.00'
  }, {
    recipe_id: 7,
    ingredient_id: 52,
    name: 'cayenne pepper',
    aisle: 'Spices and Seasonings',
    unit: 't',
    amount: '0.25'
  }, {
    recipe_id: 7,
    ingredient_id: 53,
    name: 'cherry tomatoes',
    aisle: 'Produce',
    unit: 'null',
    amount: '0.00'
  }, {
    recipe_id: 7,
    ingredient_id: 54,
    name: 'crusty bread',
    aisle: 'Bakery/Bread',
    unit: 'null',
    amount: '0.00'
  }, {
    recipe_id: 7,
    ingredient_id: 55,
    name: 'eggs',
    aisle: 'Milk, Eggs, Other Dairy',
    unit: 'null',
    amount: '3.00'
  }, {
    recipe_id: 7,
    ingredient_id: 56,
    name: 'extra virgin olive oil',
    aisle: 'Oil, Vinegar, Salad Dressing',
    unit: 'null',
    amount: '0.00'
  }, {
    recipe_id: 7,
    ingredient_id: 57,
    name: 'flour',
    aisle: 'Baking',
    unit: 'c',
    amount: '1.50'
  }, {
    recipe_id: 7,
    ingredient_id: 58,
    name: 'olive oil',
    aisle: 'Oil, Vinegar, Salad Dressing',
    unit: 'c',
    amount: '2.00'
  }, {
    recipe_id: 7,
    ingredient_id: 59,
    name: 'salt and pepper',
    aisle: 'Spices and Seasonings',
    unit: 'null',
    amount: '0.00'
  }]
];
normalize(data);
