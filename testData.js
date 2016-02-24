'use strict';
var fs = require('fs');

// target knex('ingredients').insert({ name: 'string', aisle : 'string'})

function getIng(arr) {
  var recipes = arr;
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var current = recipes[i].extendedIngredients;
    var currentLen = current.length;

    for (var c = 0; c < currentLen; c++) {
      var name = current[c].name;
      var aisle = current[c].aisle;
      var ing = "knex('ingredients').insert({ name: '" + name + "', aisle : '" + aisle + "'}),";
      console.log(ing);
      fs.appendFile('ingredients.txt', ing, function(err) {
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
    var prep_time = recipes[i].readyInMinutes || 'undefined';
    var instructions = recipes[i].sourceUrl || 'undefined';
    var credit_text = recipes[i].creditText || 'undefined';
    var likes = recipes[i].aggregateLikes || 'undefined';
    var servings = recipes[i].servings || 'undefined';
    var rec = "knex('recipes').insert({ title: '" + title + "', img_url : '" + img_url + "', prep_time : '" + prep_time + "', instructions : '" + instructions + "', credit_text : '" + credit_text + "', likes : '" + likes + "', servings : '" + servings + "'}),";
    console.log(rec);

    fs.appendFile('recipes.txt', rec, function(err) {
      if (err) {
        throw err;
      }
      console.log('The "data to append" was appended to file!');
    });
  }
}
// knex('table_name').insert({
//    title: title,
//   'img_url: "image",
//   'prep_time': "readyInMinutes",
//   'instructions': "sourceUrl",
//   'credit_text': "creditText",
//   'likes': "aggregateLikes",
//   "servings": "servings"
// })


var recipes = [{
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