'use strict';
var fs = require('fs');

// target knex('ingredients').insert({ name: 'string', aisle : 'string'})

function getIng(arr) {
  var recipes = arr;
  var len = arr.length;
  var lookupCounter = 1;
  for (var i = 0; i < len; i++) {
    var current = recipes[i].extendedIngredients;
    var currentLen = current.length;

    for (var c = 0; c < currentLen; c++) {
      var name = current[c].name;
      var aisle = current[c].aisle;
      var amount = current[c].amount;
      var unit = current[c].unitShort.toString();
      if (!unit) {
        unit = null;
      }
      var ing = "knex('ingredients').insert({ id: " + lookupCounter + ", name: '" + name + "', aisle : '" + aisle + "'}),\n";
      console.log(ing);
      fs.appendFile('ingredients.txt', ing, function(err) {
        if (err) {
          throw err;
        }
        console.log('The "data to append" was appended to file!');
      });
      var recIng = "knex('recipe_ingredients').insert({ id: " + lookupCounter + ", recipe_id: " + (i + 1) + ", ingredient_id: " + lookupCounter + ", amount: " + amount + ", unit: '" + unit + "'}),\n";
      lookupCounter++;
      fs.appendFile('lookup.txt', recIng, function(err) {
        if (err) {
          throw err;
        }
        console.log('The "data to append" was appended to file!');
      });
    }

  }
}

function getRec(arr) {
  var recipes = arr;
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var title = recipes[i].title || 'undefined';
    var img_url = recipes[i].image || 'undefined';
    var prep_time = recipes[i].readyInMinutes || 0;
    var instructions = recipes[i].sourceUrl || 'undefined';
    var credit_text = recipes[i].creditText || 'undefined';
    var likes = recipes[i].aggregateLikes || 0;
    var servings = recipes[i].servings || 0;
    var rec = "knex('recipes').insert({ id: " + (i + 1 ) + ", title: '" + title + "', img_url : '" + img_url + "', prep_time : '" + prep_time + "', instructions : '" + instructions + "', credit_text : '" + credit_text + "', likes : '" + likes + "', servings : '" + servings + "'}),";
    console.log(rec);

    fs.appendFile('recipes.txt', rec, function(err) {
      if (err) {
        throw err;
      }
      console.log('The "data to append" was appended to file!');
    });
  }
}

var recipes = [{
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 16,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 2,
    "sourceUrl": "http://www.epicurious.com/recipes/food/views/Louisiana-Deviled-Crab-Cakes-104883",
    "spoonacularSourceUrl": "https://spoonacular.com/louisiana-deviled-crab-cakes-156492",
    "aggregateLikes": 0,
    "creditText": "Epicurious",
    "sourceName": "Epicurious",
    "extendedIngredients": [{
      "aisle": "Spices and Seasonings",
      "name": "cayenne",
      "amount": 0.75,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "3/4 teaspoon cayenne",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "celery",
      "amount": 3.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "3 tablespoons finely chopped celery",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "dry mustard",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon dry mustard",
      "metaInformation": []
    }, {
      "aisle": "Milk, Eggs, Other Dairy",
      "name": "egg",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 large egg",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "green bell pepper",
      "amount": 0.25,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/4 cup finely chopped green bell pepper",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "lemon wedges",
      "amount": 2.0,
      "unit": "servings",
      "unitShort": "servings",
      "unitLong": "servings",
      "originalString": "Accompaniments: tartar sauce and lemon wedges",
      "metaInformation": []
    }, {
      "aisle": "Seafood",
      "name": "lump crabmeat",
      "amount": 0.5,
      "unit": "lb",
      "unitShort": "lb",
      "unitLong": "pounds",
      "originalString": "1/2 lb jumbo lump crabmeat, picked over",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "onion",
      "amount": 0.25,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/4 cup finely chopped onion",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "salt",
      "amount": 0.75,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "3/4 teaspoon salt",
      "metaInformation": []
    }, {
      "aisle": "Savory Snacks",
      "name": "saltines",
      "amount": 16.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "16 saltines, finely ground",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "scallion greens",
      "amount": 2.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons thinly sliced scallion greens",
      "metaInformation": []
    }, {
      "aisle": "Milk, Eggs, Other Dairy",
      "name": "sour cream",
      "amount": 1.0,
      "unit": "tablespoon",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 tablespoon sour cream",
      "metaInformation": []
    }, {
      "aisle": "Milk, Eggs, Other Dairy",
      "name": "unsalted butter",
      "amount": 3.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "3 tablespoons unsalted butter",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "vegetable oil",
      "amount": 1.0,
      "unit": "tablespoon",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 tablespoon vegetable oil",
      "metaInformation": []
    }, {
      "aisle": "Condiments",
      "name": "worcestershire sauce",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon Worcestershire sauce",
      "metaInformation": []
    }],
    "id": 156492,
    "title": "Louisiana Deviled Crab Cakes",
    "readyInMinutes": 45,
    "image": "https://spoonacular.com/recipeImages/louisiana-deviled-crab-cakes-156492.jpg"
  }, {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 37,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 10,
    "sourceUrl": "http://www.epicurious.com/recipes/food/views/Char-Grilled-Beef-Tenderloin-with-Three-Herb-Chimichurri-235342",
    "spoonacularSourceUrl": "https://spoonacular.com/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992",
    "aggregateLikes": 0,
    "creditText": "Epicurious",
    "sourceName": "Epicurious",
    "extendedIngredients": [{
      "aisle": "Ethnic Foods",
      "name": "ancho chile powder",
      "amount": 1.5,
      "unit": "teaspoons",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1 1/2 teaspoons chipotle chile powder or ancho chile powder",
      "metaInformation": []
    }, {
      "aisle": "Meat",
      "name": "beef tenderloin",
      "amount": 3.5,
      "unit": "pound",
      "unitShort": "lb",
      "unitLong": "pounds",
      "originalString": "1 3 1/2-pound beef tenderloin",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "black pepper",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon freshly ground black pepper",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "coarse kosher salt",
      "amount": 1.0,
      "unit": "tablespoon",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 tablespoon coarse kosher salt",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "dark brown sugar",
      "amount": 2.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons dark brown sugar",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "fresh cilantro",
      "amount": 2.0,
      "unit": "cups",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "2 cups (packed) stemmed fresh cilantro",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "fresh mint",
      "amount": 1.0,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cup",
      "originalString": "1 cup (packed) stemmed fresh mint",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "fresh parsley",
      "amount": 3.0,
      "unit": "cups",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "3 cups (packed) stemmed fresh parsley",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "garlic cloves",
      "amount": 3.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "3 garlic cloves, peeled",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "ground pepper",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon ground black pepper",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "lemon juice",
      "amount": 3.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "3 tablespoons fresh lemon juice",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "olive oil",
      "amount": 0.75,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "3/4 cup olive oil",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "olive oil",
      "amount": 2.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons olive oil",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "red pepper",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon dried crushed red pepper",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "red wine vinegar",
      "amount": 3.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "3 tablespoons Sherry wine vinegar or red wine vinegar",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "sea salt",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon fine sea salt",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "shallots",
      "amount": 2.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "2 medium shallots, peeled, quartered",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "sweet paprika",
      "amount": 1.0,
      "unit": "tablespoon",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 tablespoon sweet smoked paprika*",
      "metaInformation": []
    }],
    "id": 156992,
    "title": "Char-Grilled Beef Tenderloin with Three-Herb Chimichurri",
    "readyInMinutes": 45,
    "image": "https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg"
  }, {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 8,
    "gaps": "no",
    "lowFodmap": true,
    "ketogenic": false,
    "whole30": true,
    "servings": 1,
    "preparationMinutes": 2,
    "cookingMinutes": 0,
    "sourceUrl": "http://www.food.com/recipe/marie-rose-sauce-91120",
    "spoonacularSourceUrl": "https://spoonacular.com/marie-rose-sauce-146992",
    "aggregateLikes": 7,
    "creditText": "Food.com",
    "sourceName": "Food.com",
    "extendedIngredients": [{
      "aisle": "Condiments",
      "name": "ketchup",
      "amount": 2.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons ketchup",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "lemon juice",
      "amount": 1.0,
      "unit": "serving",
      "unitShort": "serving",
      "unitLong": "serving",
      "originalString": "lemon juice, to taste",
      "metaInformation": []
    }, {
      "aisle": "Condiments",
      "name": "mayonnaise",
      "amount": 2.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons mayonnaise",
      "metaInformation": []
    }, {
      "aisle": "Condiments",
      "name": "worcestershire sauce",
      "amount": 1.0,
      "unit": "serving",
      "unitShort": "serving",
      "unitLong": "serving",
      "originalString": "worcestershire sauce, to taste",
      "metaInformation": []
    }],
    "id": 146992,
    "title": "Marie Rose Sauce",
    "readyInMinutes": 2,
    "image": "https://spoonacular.com/recipeImages/marie-rose-sauce-2-146992.jpg"
  }, {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 1,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": true,
    "servings": 12,
    "preparationMinutes": 20,
    "cookingMinutes": 30,
    "sourceUrl": "https://www.bettycrocker.com/recipes/roasted-tomatillo-poblano-salsa/f771a88c-066c-4067-a16a-1547c8dc9927",
    "spoonacularSourceUrl": "https://spoonacular.com/roasted-tomatillo-poblano-salsa-166992",
    "aggregateLikes": 0,
    "creditText": "Betty Crocker",
    "sourceName": "Betty Crocker",
    "extendedIngredients": [{
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "canola oil",
      "amount": 2.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons canola oil",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "fresh cilantro leaves",
      "amount": 0.25,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/4 cup fresh cilantro leaves",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "ground cumin",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon roasted ground cumin or ground cumin",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "jalapeno chile",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 jalapeño chile, seeded, chopped",
      "metaInformation": []
    }, {
      "aisle": "Frozen",
      "name": "limeade concentrate",
      "amount": 0.25,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/4 cup frozen (thawed) limeade concentrate (from 6-oz can)",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "poblano chiles",
      "amount": 2.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "2 medium poblano chiles",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "red onion",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 small red onion, cut into wedges",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "salt",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon salt",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "tomatillos",
      "amount": 1.0,
      "unit": "lb",
      "unitShort": "lb",
      "unitLong": "pound",
      "originalString": "1 lb tomatillos, husks removed, rinsed and cut in half",
      "metaInformation": []
    }],
    "id": 166992,
    "title": "Roasted Tomatillo-Poblano Salsa",
    "readyInMinutes": 50,
    "image": "https://spoonacular.com/recipeImages/Roasted-Tomatillo-Poblano-Salsa-166992.jpg"
  }, {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 9,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 4,
    "preparationMinutes": 5,
    "cookingMinutes": 10,
    "sourceUrl": "http://www.foodnetwork.com/recipes/claire-robinson/creamed-spinach-recipe.html",
    "spoonacularSourceUrl": "https://spoonacular.com/creamed-spinach-396992",
    "aggregateLikes": 2,
    "creditText": "Foodnetwork",
    "sourceName": "Foodnetwork",
    "extendedIngredients": [{
      "aisle": "Milk, Eggs, Other Dairy",
      "name": "heavy cream",
      "amount": 1.0,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cup",
      "originalString": "1 cup heavy cream",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "Salt & Pepper",
      "amount": 4.0,
      "unit": "servings",
      "unitShort": "servings",
      "unitLong": "servings",
      "originalString": "Grey salt and freshly ground black pepper",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "spinach leaves",
      "amount": 2.0,
      "unit": "pounds",
      "unitShort": "lb",
      "unitLong": "pounds",
      "originalString": "2 pounds fresh spinach leaves, washed thoroughly but not dried too much",
      "metaInformation": []
    }],
    "id": 396992,
    "title": "Creamed Spinach",
    "readyInMinutes": 15,
    "image": "https://spoonacular.com/recipeImages/Creamed-Spinach-396992.jpeg"
  }, {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 8,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 4,
    "preparationMinutes": 15,
    "cookingMinutes": 30,
    "sourceUrl": "http://allrecipes.com/Recipe/Grilled-Grouper-with-Mango-Butter/Detail.aspx",
    "spoonacularSourceUrl": "https://spoonacular.com/grilled-grouper-with-mango-butter-256992",
    "aggregateLikes": 47,
    "creditText": "Allrecipes",
    "sourceName": "Allrecipes",
    "extendedIngredients": [{
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "butter",
      "amount": 0.25,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/4 cup butter",
      "metaInformation": []
    }, {
      "aisle": "Alcoholic Beverages",
      "name": "dry white wine",
      "amount": 0.25,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/4 cup dry white wine (such as Chardonnay)",
      "metaInformation": []
    }, {
      "aisle": "Seafood",
      "name": "grouper fillets",
      "amount": 24.0,
      "unit": "ounce",
      "unitShort": "oz",
      "unitLong": "ounces",
      "originalString": "4 (6 ounce) grouper fillets",
      "metaInformation": []
    }, {
      "aisle": "Health Foods",
      "name": "honey",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon honey",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "mango",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 mango, peeled and cubed",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "olive oil",
      "amount": 1.0,
      "unit": "tablespoon",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 tablespoon olive oil",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "red pepper flakes",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon red pepper flakes",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "sea salt",
      "amount": 4.0,
      "unit": "servings",
      "unitShort": "servings",
      "unitLong": "servings",
      "originalString": "sea salt to taste",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "shallot",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 shallot, minced",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "white pepper",
      "amount": 4.0,
      "unit": "servings",
      "unitShort": "servings",
      "unitLong": "servings",
      "originalString": "white pepper to taste",
      "metaInformation": []
    }],
    "id": 256992,
    "title": "Grilled Grouper with Mango Butter",
    "readyInMinutes": 45,
    "image": "https://spoonacular.com/recipeImages/Grilled-Grouper-with-Mango-Butter-256992.jpg"
  }, {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 4,
    "preparationMinutes": 0,
    "cookingMinutes": 25,
    "sourceUrl": "http://www.egglesscooking.com/2008/06/27/apple-puran-poli/",
    "spoonacularSourceUrl": "https://spoonacular.com/apple-puran-poli-246992",
    "aggregateLikes": 9,
    "creditText": "Eggless Cooking",
    "sourceName": "Eggless Cooking",
    "extendedIngredients": [{
      "aisle": "Baking",
      "name": "all purpose flour",
      "amount": 1.0,
      "unit": "Cup",
      "unitShort": "Cup",
      "unitLong": "Cup",
      "originalString": "1 Cup All Purpose Flour (Maida)",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "apple",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 Grated Small Apple (Be Sure To Check That It's Sweet)",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "cardamom powder",
      "amount": 0.5,
      "unit": "Teaspoon",
      "unitShort": "Teaspoon",
      "unitLong": "Teaspoons",
      "originalString": "1/2 Teaspoon Cardamom Powder",
      "metaInformation": []
    }, {
      "aisle": "Ethnic Foods",
      "name": "ghee",
      "amount": 2.0,
      "unit": "Teaspoons",
      "unitShort": "Teaspoons",
      "unitLong": "Teaspoons",
      "originalString": "2 Teaspoons Ghee",
      "metaInformation": []
    }, {
      "aisle": "Milk, Eggs, Other Dairy",
      "name": "milk",
      "amount": 0.25,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1/4 To 1/2 Cup Grated Or Crumbled Milk Khoa (Khova, Mawa)",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "powdered milk",
      "amount": 4.0,
      "unit": "servings",
      "unitShort": "servings",
      "unitLong": "servings",
      "originalString": "As Needed Powdered Dhalia, Optional",
      "metaInformation": []
    }],
    "id": 246992,
    "title": "Apple Puran Poli",
    "readyInMinutes": 25,
    "image": "https://spoonacular.com/recipeImages/Apple-Puran-Poli-246992.jpg"
  }, {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 108,
    "preparationMinutes": 25,
    "cookingMinutes": 13,
    "sourceUrl": "http://www.egglesscooking.com/2011/12/20/big-batch-oatmeal-raisin-cookies/",
    "spoonacularSourceUrl": "https://spoonacular.com/big-batch-oatmeal-raisin-cookies-246892",
    "aggregateLikes": 59,
    "creditText": "Eggless Cooking",
    "sourceName": "Eggless Cooking",
    "extendedIngredients": [{
      "aisle": "Baking",
      "name": "all purpose flour",
      "amount": 2.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "2 And 1/2 Cups All Purpose Flour",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "baking soda",
      "amount": 1.0,
      "unit": "Tablespoon",
      "unitShort": "Tablespoon",
      "unitLong": "Tablespoon",
      "originalString": "1 Tablespoon Baking Soda",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "brown sugar",
      "amount": 2.0,
      "unit": "Cups",
      "unitShort": "Cups",
      "unitLong": "Cups",
      "originalString": "2 Cups Brown Sugar",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "butter",
      "amount": 2.0,
      "unit": "Cups",
      "unitShort": "Cups",
      "unitLong": "Cups",
      "originalString": "2 Cups Butter, Melted And Cooled",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "cinnamon",
      "amount": 2.0,
      "unit": "Teaspoons",
      "unitShort": "Teaspoons",
      "unitLong": "Teaspoons",
      "originalString": "2 Teaspoons Cinnamon",
      "metaInformation": []
    }, {
      "aisle": "Health Foods",
      "name": "Ener-G egg replacer",
      "amount": 4.0,
      "unit": "Teaspoons",
      "unitShort": "Teaspoons",
      "unitLong": "Teaspoons",
      "originalString": "4 Teaspoons Ener-G Egg Replacer",
      "metaInformation": []
    }, {
      "aisle": "Health Foods",
      "name": "granulated sugar",
      "amount": 1.0,
      "unit": "Cup",
      "unitShort": "Cup",
      "unitLong": "Cup",
      "originalString": "1 Cup Granulated Sugar",
      "metaInformation": []
    }, {
      "aisle": "Cereal",
      "name": "quick cooking oats",
      "amount": 6.0,
      "unit": "Cups",
      "unitShort": "Cups",
      "unitLong": "Cups",
      "originalString": "6 Cups Quick Cooking Oats",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "raisins",
      "amount": 3.0,
      "unit": "Cups",
      "unitShort": "Cups",
      "unitLong": "Cups",
      "originalString": "3 Cups Raisins",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "salt",
      "amount": 2.0,
      "unit": "Teaspoons",
      "unitShort": "Teaspoons",
      "unitLong": "Teaspoons",
      "originalString": "2 Teaspoons Salt",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "semi sweet chocolate chips",
      "amount": 2.0,
      "unit": "Cups",
      "unitShort": "Cups",
      "unitLong": "Cups",
      "originalString": "2 Cups Semi-Sweet Chocolate Chips",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "unsweetened coconut",
      "amount": 2.0,
      "unit": "Cups",
      "unitShort": "Cups",
      "unitLong": "Cups",
      "originalString": "2 Cups Flaked Coconut (Unsweetened)",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "vanilla extract",
      "amount": 2.0,
      "unit": "Teaspoons",
      "unitShort": "Teaspoons",
      "unitLong": "Teaspoons",
      "originalString": "2 Teaspoons Vanilla Extract",
      "metaInformation": []
    }, {
      "aisle": "Beverages",
      "name": "water",
      "amount": 0.25,
      "unit": "Cup",
      "unitShort": "Cup",
      "unitLong": "Cups",
      "originalString": "1/4 Cup Water",
      "metaInformation": []
    }],
    "id": 246892,
    "title": "Big Batch Oatmeal Raisin Cookies",
    "readyInMinutes": 38,
    "image": "https://spoonacular.com/recipeImages/Big-Batch-Oatmeal-Raisin-Cookies-246892.jpg"
  }, {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 7,
    "sourceUrl": "http://www.myrecipes.com/m/recipe/rotini-salad-with-kalamata-olive-dressing-10000001206171/",
    "spoonacularSourceUrl": "https://spoonacular.com/rotini-salad-with-kalamata-olive-dressing-246882",
    "aggregateLikes": 13,
    "creditText": "My Recipes",
    "sourceName": "My Recipes",
    "extendedIngredients": [{
      "aisle": "Spices and Seasonings",
      "name": "black pepper",
      "amount": 0.25,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/4 teaspoon freshly ground black pepper",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "cherry tomatoes",
      "amount": 1.5,
      "unit": "cups",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1 1/2 cups quartered cherry tomatoes",
      "metaInformation": []
    }, {
      "aisle": "Condiments",
      "name": "dijon mustard",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon Dijon mustard",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "fresh basil",
      "amount": 0.5,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/2 cup sliced fresh basil",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "garlic cloves",
      "amount": 3.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "3 garlic cloves, peeled and sliced",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "haricots verts",
      "amount": 0.25,
      "unit": "pound",
      "unitShort": "lb",
      "unitLong": "pounds",
      "originalString": "1/4 pound haricots verts, trimmed and cut into 1-inch pieces",
      "metaInformation": []
    }, {
      "aisle": "Canned and Jarred",
      "name": "kalamata olives",
      "amount": 4.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "4 pitted kalamata olives, sliced",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "kosher salt",
      "amount": 0.25,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/4 teaspoon kosher salt",
      "metaInformation": []
    }, {
      "aisle": "Cheese",
      "name": "mozzarella",
      "amount": 1.5,
      "unit": "ounces",
      "unitShort": "oz",
      "unitLong": "ounces",
      "originalString": "1 1/2 ounces diced fresh mozzarella",
      "metaInformation": []
    }, {
      "aisle": "Meat",
      "name": "prosciutto",
      "amount": 1.0,
      "unit": "ounce",
      "unitShort": "oz",
      "unitLong": "ounce",
      "originalString": "1 ounce prosciutto, chopped",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "red bell pepper",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 red bell pepper",
      "metaInformation": []
    }, {
      "aisle": "Pasta and Rice",
      "name": "rotini",
      "amount": 6.0,
      "unit": "ounces",
      "unitShort": "oz",
      "unitLong": "ounces",
      "originalString": "6 ounces uncooked rotini (corkscrew pasta)",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "shallot",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 large shallot, peeled and cut into 1/2-inch pieces",
      "metaInformation": []
    }, {
      "aisle": "Beverages",
      "name": "water",
      "amount": 1.0,
      "unit": "tablespoon",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 tablespoon water",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "white balsamic vinegar",
      "amount": 2.5,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 1/2 tablespoons white balsamic vinegar",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "yellow bell pepper",
      "amount": 0.5,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1/2 yellow bell pepper",
      "metaInformation": []
    }],
    "id": 246882,
    "title": "Rotini Salad with Kalamata Olive Dressing",
    "readyInMinutes": 45,
    "image": "https://spoonacular.com/recipeImages/Rotini-Salad-with-Kalamata-Olive-Dressing-246882.jpg"
  }, {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": true,
    "servings": 4,
    "preparationMinutes": 25,
    "cookingMinutes": 0,
    "sourceUrl": "http://www.myrecipes.com/recipe/cedar-plank-grilled-salmon-50400000122082",
    "spoonacularSourceUrl": "https://spoonacular.com/cedar-plank-grilled-salmon-with-mango-kiwi-salsa-246282",
    "aggregateLikes": 0,
    "creditText": "My Recipes",
    "sourceName": "My Recipes",
    "extendedIngredients": [{
      "aisle": "Spices and Seasonings",
      "name": "black pepper",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon freshly ground black pepper, divided",
      "metaInformation": []
    }, {
      "aisle": "Gourmet",
      "name": "cedar plank",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 large cedar plank",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "fresh cilantro",
      "amount": 2.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons chopped fresh cilantro",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "kiwifruit",
      "amount": 0.5,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/2 cup diced peeled kiwifruit",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "kosher salt",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon kosher salt, divided",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "lime juice",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon fresh lime juice",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "mango",
      "amount": 1.0,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cup",
      "originalString": "1 cup finely diced peeled ripe mango",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "olive oil",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon extra-virgin olive oil",
      "metaInformation": []
    }, {
      "aisle": "Seafood",
      "name": "salmon fillets",
      "amount": 24.0,
      "unit": "ounce",
      "unitShort": "oz",
      "unitLong": "ounces",
      "originalString": "4 (6-ounce) sustainable skinless salmon fillets (such as wild Alaskan)",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "serrano chile",
      "amount": 1.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 serrano chile, finely chopped",
      "metaInformation": []
    }],
    "id": 246282,
    "title": "Cedar Plank-Grilled Salmon with Mango Kiwi Salsa",
    "readyInMinutes": 25,
    "image": "https://spoonacular.com/recipeImages/Cedar-Plank-Grilled-Salmon-with-Mango-Kiwi-Salsa-246282.jpg"
  }, {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 12,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 4,
    "preparationMinutes": 30,
    "cookingMinutes": 45,
    "sourceUrl": "http://www.food.com/recipe/pork-chops-with-mushroom-cream-sauce-low-carb-224960",
    "spoonacularSourceUrl": "https://spoonacular.com/pork-chops-with-mushroom-cream-sauce-low-carb-146282",
    "aggregateLikes": 24,
    "creditText": "Food.com",
    "sourceName": "Food.com",
    "extendedIngredients": [{
      "aisle": "Spices and Seasonings",
      "name": "black pepper",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon black pepper , freshly ground",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "dried rosemary",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon dried rosemary , ground fine",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "dried thyme",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon dried thyme , ground fine",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "extra virgin olive oil",
      "amount": 2.0,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons extra virgin olive oil",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "garlic cloves",
      "amount": 2.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "2 garlic cloves , freshly minced",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "garlic powder",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon garlic powder",
      "metaInformation": []
    }, {
      "aisle": "Milk, Eggs, Other Dairy",
      "name": "heavy cream",
      "amount": 0.5,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/2 cup heavy cream",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "mushroom",
      "amount": 1.0,
      "unit": "lb",
      "unitShort": "lb",
      "unitLong": "pound",
      "originalString": "1 lb mushroom",
      "metaInformation": []
    }, {
      "aisle": "Meat",
      "name": "pork chops",
      "amount": 4.0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "4 pork chops , 1 inch thick",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "sea salt",
      "amount": 1.0,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon sea salt",
      "metaInformation": []
    }, {
      "aisle": "Alcoholic Beverages",
      "name": "white wine",
      "amount": 0.25,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1/4 cup white wine",
      "metaInformation": []
    }],
    "id": 146282,
    "title": "Pork Chops With Mushroom Cream Sauce - Low Carb",
    "readyInMinutes": 75,
    "image": "https://spoonacular.com/recipeImages/pork-chops-with-mushroom-cream-sauce-low-carb-2-146282.jpg"
  }, {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 37,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 10,
    "sourceUrl": "http://www.epicurious.com/recipes/food/views/Char-Grilled-Beef-Tenderloin-with-Three-Herb-Chimichurri-235342",
    "spoonacularSourceUrl": "https://spoonacular.com/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992",
    "aggregateLikes": 0,
    "creditText": "Epicurious",
    "sourceName": "Epicurious",
    "extendedIngredients": [{
      "aisle": "Ethnic Foods",
      "name": "ancho chile powder",
      "amount": 1.5,
      "unit": "teaspoons",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1 1/2 teaspoons chipotle chile powder or ancho chile powder",
      "metaInformation": []
    }, {
      "aisle": "Meat",
      "name": "beef tenderloin",
      "amount": 3.5,
      "unit": "pound",
      "unitShort": "lb",
      "unitLong": "pounds",
      "originalString": "1 3 1/2-pound beef tenderloin",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "black pepper",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon freshly ground black pepper",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "coarse kosher salt",
      "amount": 1,
      "unit": "tablespoon",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 tablespoon coarse kosher salt",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "dark brown sugar",
      "amount": 2,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons dark brown sugar",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "fresh cilantro",
      "amount": 2,
      "unit": "cups",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "2 cups (packed) stemmed fresh cilantro",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "fresh mint",
      "amount": 1,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cup",
      "originalString": "1 cup (packed) stemmed fresh mint",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "fresh parsley",
      "amount": 3,
      "unit": "cups",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "3 cups (packed) stemmed fresh parsley",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "garlic cloves",
      "amount": 3,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "3 garlic cloves, peeled",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "ground pepper",
      "amount": 1,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon ground black pepper",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "lemon juice",
      "amount": 3,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "3 tablespoons fresh lemon juice",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "olive oil",
      "amount": 0.75,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "3/4 cup olive oil",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "olive oil",
      "amount": 2,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 tablespoons olive oil",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "red pepper",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon dried crushed red pepper",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "red wine vinegar",
      "amount": 3,
      "unit": "tablespoons",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "3 tablespoons Sherry wine vinegar or red wine vinegar",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "sea salt",
      "amount": 1,
      "unit": "teaspoon",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon fine sea salt",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "shallots",
      "amount": 2,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "2 medium shallots, peeled, quartered",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "sweet paprika",
      "amount": 1,
      "unit": "tablespoon",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 tablespoon sweet smoked paprika*",
      "metaInformation": []
    }],
    "id": 156992,
    "title": "Char-Grilled Beef Tenderloin with Three-Herb Chimichurri",
    "readyInMinutes": 45,
    "image": "https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg"
  }, {
    "weightWatcherSmartPoints": 0,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "sourceUrl": "http://latavolamarcherecipebox.blogspot.com/2009/10/fried-anchovies-with-sage.html",
    "spoonacularSourceUrl": "https://spoonacular.com/fried-anchovies-with-sage-1",
    "aggregateLikes": 1,
    "extendedIngredients": [{
      "aisle": "?",
      "name": "baking powder",
      "amount": 1,
      "unit": "tsp",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 tsp of baking powder",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "egg",
      "amount": 1,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1 egg",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "flour",
      "amount": 1,
      "unit": "cup",
      "unitShort": "c",
      "unitLong": "cup",
      "originalString": "1 cup of flour",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "sage leaves",
      "amount": 1,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "sage leaves (optional - if you are not a fan of sage just omit)",
      "metaInformation": [
        "(optional - if you are not a fan of sage just omit)"
      ]
    }, {
      "aisle": "?",
      "name": "salt",
      "amount": 1,
      "unit": "tsp",
      "unitShort": "t",
      "unitLong": "teaspoon",
      "originalString": "1 tsp of salt",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "seltzer water",
      "amount": 1,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "seltzer water",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "vegetable oil",
      "amount": 1,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "vegetable oil for frying",
      "metaInformation": [
        "for frying"
      ]
    }, {
      "aisle": "?",
      "name": "anchovies , spine removed",
      "amount": 1,
      "unit": "lb",
      "unitShort": "lb",
      "unitLong": "pound",
      "originalString": "1 lb of anchovies cleaned, spine removed",
      "metaInformation": [
        "cleaned"
      ]
    }],
    "id": 1,
    "title": "Fried Anchovies With Sage",
    "readyInMinutes": 60,
    "image": "https://spoonacular.com/recipeImages/fried_anchovies_with_sage-1.jpg"
  },

  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 0,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": true,
    "servings": 8,
    "sourceUrl": "http://www.thekitchn.com/other-two-veg-recipes-notes-85779",
    "spoonacularSourceUrl": "https://spoonacular.com/anchovies-with-breadcrumbs-scallions-2",
    "aggregateLikes": 0,
    "extendedIngredients": [{
      "aisle": "Seafood",
      "name": "anchovies",
      "amount": 6,
      "unit": "oz",
      "unitShort": "oz",
      "unitLong": "ounces",
      "originalString": "6 oz marinated anchovies",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "garlic clove",
      "amount": 0.5,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1/2 garlic clove",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "olive oil",
      "amount": 2,
      "unit": "tsps",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "2 tsps olive oil plus 1/4 for drizzling",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "scallions",
      "amount": 2,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "2 whole scallions, julienned",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "two 3",
      "amount": 2,
      "unit": "ozslices",
      "unitShort": "ozslices",
      "unitLong": "ozslices",
      "originalString": "2 oz day-old bread, or two 3/4-inch thick slices",
      "metaInformation": []
    }],
    "id": 2,
    "title": "Anchovies With Breadcrumbs & Scallions",
    "readyInMinutes": 18,
    "image": "https://spoonacular.com/recipeImages/anchovies_with_breadcrumbs_scallions-2.jpg"
  },

  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 17,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": true,
    "servings": 1,
    "sourceUrl": "http://saladpride.blogspot.com/2011/06/carrots-cauliflower-and-anchovies.html",
    "spoonacularSourceUrl": "https://spoonacular.com/carrots-cauliflower-and-anchovies-3",
    "aggregateLikes": 0,
    "extendedIngredients": [{
      "aisle": "Nuts",
      "name": "almonds",
      "amount": 1,
      "unit": "handful",
      "unitShort": "handful",
      "unitLong": "handful",
      "originalString": "A handful of almonds",
      "metaInformation": []
    }, {
      "aisle": "Seafood",
      "name": "anchovies",
      "amount": 0.8,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "4/5 Anchovies (or Sardines)",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "carrots",
      "amount": 2,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "2 raw pealed carrots",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "cauliflower",
      "amount": 1,
      "unit": "serving",
      "unitShort": "serving",
      "unitLong": "serving",
      "originalString": "A quarter of a raw cauliflower",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "extra-virgin olive oil",
      "amount": 3,
      "unit": "tbs",
      "unitShort": "tbs",
      "unitLong": "tbs",
      "originalString": "Dressing: Extra virgin olive oil, Salt and pepper, 3 tbs Lemon juice",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "rocket",
      "amount": 50,
      "unit": "gr",
      "unitShort": "gr",
      "unitLong": "grs",
      "originalString": "Rocket (arugula) 50gr",
      "metaInformation": []
    }],
    "id": 3,
    "title": "Carrots, Cauliflower And Anchovies",
    "readyInMinutes": 45,
    "image": "https://spoonacular.com/recipeImages/carrots-cauliflower-and-anchovies-2-3.jpg"
  },

  {
    "weightWatcherSmartPoints": 0,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "sourceUrl": "http://bapstory.blogspot.com/2011/08/stir-fried-anchovies-myulchi-bokkeum.html",
    "spoonacularSourceUrl": "https://spoonacular.com/stir-fried-anchovies-(myulchi-bokkeum)-4",
    "aggregateLikes": 11,
    "extendedIngredients": [{
      "aisle": "?",
      "name": "garlic",
      "amount": 2,
      "unit": "T",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 T sliced garlic",
      "metaInformation": [
        "sliced"
      ]
    }, {
      "aisle": "?",
      "name": "ginger",
      "amount": 0.5,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1/2 ground ginger",
      "metaInformation": [
        "ground"
      ]
    }, {
      "aisle": "?",
      "name": "korean cooking syrup",
      "amount": 1,
      "unit": "T",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 T Korean cooking syrup",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "pine nuts",
      "amount": 2,
      "unit": "T",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 T toasted pine nuts (we substituted with chopped walnuts and pumpkin seed and it was yummy)",
      "metaInformation": [
        "chopped",
        "(we substituted with  walnuts and pumpkin seed and it was yummy)",
        "toasted"
      ]
    }, {
      "aisle": "?",
      "name": "plum extract",
      "amount": 1.5,
      "unit": "t",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1.5 t plum extract",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "sesame seeds",
      "amount": 2,
      "unit": "T",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 T toasted sesame seeds",
      "metaInformation": [
        "toasted"
      ]
    }, {
      "aisle": "?",
      "name": "sugar",
      "amount": 1,
      "unit": "T",
      "unitShort": "T",
      "unitLong": "tablespoon",
      "originalString": "1 T sugar",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "tiny dried anchovies",
      "amount": 150,
      "unit": "g",
      "unitShort": "g",
      "unitLong": "grams",
      "originalString": "150 g tiny dried anchovies",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "cooking oil",
      "amount": 2,
      "unit": "T",
      "unitShort": "T",
      "unitLong": "tablespoons",
      "originalString": "2 T cooking oil",
      "metaInformation": []
    }],
    "id": 4,
    "title": "Stir Fried Anchovies (myulchi Bokkeum)",
    "readyInMinutes": 4,
    "image": "https://spoonacular.com/recipeImages/stir_fried_anchovies-4.jpg"
  },

  {
    "weightWatcherSmartPoints": 0,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "sourceUrl": "http://en.julskitchen.com/tuscany/grandma-mennas-kitchen-bread-butter-and-anchovies",
    "spoonacularSourceUrl": "https://spoonacular.com/bread-butter-and-anchovies-5",
    "aggregateLikes": 0,
    "creditText": "Juls Kitchen",
    "sourceName": "Juls Kitchen",
    "extendedIngredients": [{
      "aisle": "?",
      "name": "anchovies, in oil",
      "amount": 1,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "anchovies, in oil or salted",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "pickles baby capers",
      "amount": 1,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "pickles baby capers",
      "metaInformation": []
    }, {
      "aisle": "?",
      "name": "tuscan bread",
      "amount": 1,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "sliced Tuscan bread",
      "metaInformation": [
        "sliced"
      ]
    }, {
      "aisle": "?",
      "name": "unsalted butter",
      "amount": 1,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "unsalted butter",
      "metaInformation": []
    }],
    "id": 5,
    "title": "Bread, Butter And Anchovies",
    "readyInMinutes": 3,
    "image": "https://spoonacular.com/recipeImages/bread_butter_and_anchovies-5.jpg"
  },

  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 41,
    "gaps": "no",
    "lowFodmap": true,
    "ketogenic": false,
    "whole30": true,
    "servings": 4,
    "sourceUrl": "http://www.sippitysup.com/fried-anchovies",
    "spoonacularSourceUrl": "https://spoonacular.com/fried-anchovies-6",
    "aggregateLikes": 0,
    "creditText": "SippitySup",
    "sourceName": "SippitySup",
    "extendedIngredients": [{
      "aisle": "Seafood",
      "name": "anchovies",
      "amount": 1,
      "unit": "lb",
      "unitShort": "lb",
      "unitLong": "pound",
      "originalString": "1 lb whole fresh, or cleaned and marinated anchovies (not the salted or tinned variety)",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "cayenne pepper",
      "amount": 0.25,
      "unit": "t",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "0.25 t cayenne pepper",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "cherry tomatoes",
      "amount": 0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "0 cherry tomatoes, as needed",
      "metaInformation": []
    }, {
      "aisle": "Bakery/Bread",
      "name": "crusty bread",
      "amount": 0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "0 crusty bread",
      "metaInformation": []
    }, {
      "aisle": "Milk, Eggs, Other Dairy",
      "name": "eggs",
      "amount": 3,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "3 large eggs",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "extra virgin olive oil",
      "amount": 0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "0 extra virgin olive oil, for dipping bread, optional",
      "metaInformation": []
    }, {
      "aisle": "Baking",
      "name": "flour",
      "amount": 1.5,
      "unit": "c",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "1.5 c flour",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "olive oil",
      "amount": 2,
      "unit": "c",
      "unitShort": "c",
      "unitLong": "cups",
      "originalString": "2 c olive oil",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "salt and pepper",
      "amount": 0,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "0 salt and black pepper to taste",
      "metaInformation": []
    }],
    "id": 6,
    "title": "Fried Anchovies",
    "readyInMinutes": 15,
    "image": "https://spoonacular.com/recipeImages/fried_anchovies-6.jpg"
  },

  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 1,
    "sourceUrl": "http://www.thekitchn.com/tomato-and-anchovies-with-breadcrumbs-63500",
    "spoonacularSourceUrl": "https://spoonacular.com/tomato-anchovies-with-bread-crumbs-basil-red-onion-recip-7",
    "aggregateLikes": 31,
    "extendedIngredients": [{
      "aisle": "Seafood",
      "name": "anchovy",
      "amount": 3,
      "unit": "fillet",
      "unitShort": "fillet",
      "unitLong": "fillets",
      "originalString": "3-5 whole Boquerones or anchovy fillets",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "basil leaves",
      "amount": 2,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "2-3 basil leaves, sliced",
      "metaInformation": []
    }, {
      "aisle": "Bakery/Bread",
      "name": "bread crumbs",
      "amount": 1,
      "unit": "Tbsp",
      "unitShort": "Tbsp",
      "unitLong": "Tbsp",
      "originalString": "1 Tbsp bread crumbs, toasted if desired",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "cracked pepper",
      "amount": 1,
      "unit": "serving",
      "unitShort": "serving",
      "unitLong": "serving",
      "originalString": "Freshly cracked black pepper, to taste",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "extra virgin olive oil",
      "amount": 2,
      "unit": "tsps",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "2 tsps extra virgin olive oil",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "red onion",
      "amount": 0.125,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "1/8 red onion, thinly sliced",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "sherry vinegar",
      "amount": 0.5,
      "unit": "tsp",
      "unitShort": "t",
      "unitLong": "teaspoons",
      "originalString": "1/2 tsp sherry vinegar",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "tomato",
      "amount": 2,
      "unit": "slices",
      "unitShort": "slices",
      "unitLong": "slices",
      "originalString": "2-3 thick slices from a large tomato",
      "metaInformation": []
    }],
    "id": 7,
    "title": "Tomato & Anchovies With Bread Crumbs, Basil & Red Onion   Recip",
    "readyInMinutes": 45,
    "image": "https://spoonacular.com/recipeImages/tomato_anchovies_with_bread_crumbs_basil_red_onion_recip-7.jpg"
  },

  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": true,
    "servings": 4,
    "sourceUrl": "http://www.finecooking.com/recipes/orecchiette-broccoli-raab-anchovies.aspx ",
    "spoonacularSourceUrl": "https://spoonacular.com/orecchiette-broccoli-raab-anchovies-8",
    "aggregateLikes": 1,
    "extendedIngredients": [{
      "aisle": "Produce",
      "name": "broccoli raab",
      "amount": 1,
      "unit": "bunch",
      "unitShort": "bunch",
      "unitLong": "bunch",
      "originalString": "1 bunch broccoli raab, tough stems and outer leaves trimmed",
      "metaInformation": []
    }, {
      "aisle": "Produce",
      "name": "garlic",
      "amount": 1,
      "unit": "clove",
      "unitShort": "clove",
      "unitLong": "clove",
      "originalString": "1 large clove garlic, slightly crushed",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "kosher salt",
      "amount": 1,
      "unit": "Tbs",
      "unitShort": "Tbs",
      "unitLong": "Tb",
      "originalString": "1 Tbs. kosher salt",
      "metaInformation": []
    }, {
      "aisle": "Spices and Seasonings",
      "name": "kosher salt",
      "amount": 4,
      "unit": "servings",
      "unitShort": "servings",
      "unitLong": "servings",
      "originalString": "Kosher salt and freshly ground black pepper to taste",
      "metaInformation": []
    }, {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "name": "olive oil",
      "amount": 4,
      "unit": "Tbs",
      "unitShort": "Tbs",
      "unitLong": "Tbs",
      "originalString": "4 Tbs. extra-virgin olive oil",
      "metaInformation": []
    }, {
      "aisle": "Canned and Jarred",
      "name": "salt packed anchovies",
      "amount": 3,
      "unit": "",
      "unitShort": "",
      "unitLong": "",
      "originalString": "3 whole salt-packed anchovies or 6 to 8 oil-cured anchovy fillets",
      "metaInformation": []
    }],
    "id": 8,
    "title": "Orecchiette, Broccoli Raab & Anchovies",
    "readyInMinutes": 45,
    "image": "https://spoonacular.com/recipeImages/orecchiette-broccoli-raab-anchovies-2-8.jpg"
  }
];
getRec(recipes);
getIng(recipes);
