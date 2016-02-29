'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('recipes').del(),

    knex('recipes').insert({
      id: 1,
      title: 'Louisiana Deviled Crab Cakes',
      img_url: 'https://spoonacular.com/recipeImages/louisiana-deviled-crab-cakes-156492.jpg',
      prep_time: '45',
      instructions: 'http://www.epicurious.com/recipes/food/views/Louisiana-Deviled-Crab-Cakes-104883',
      credit_text: 'Epicurious',
      likes: '0',
      servings: '2'
    }), knex('recipes').insert({
      id: 2,
      title: 'Char-Grilled Beef Tenderloin with Three-Herb Chimichurri',
      img_url: 'https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg',
      prep_time: '45',
      instructions: 'http://www.epicurious.com/recipes/food/views/Char-Grilled-Beef-Tenderloin-with-Three-Herb-Chimichurri-235342',
      credit_text: 'Epicurious',
      likes: '0',
      servings: '10'
    }), knex('recipes').insert({
      id: 3,
      title: 'Marie Rose Sauce',
      img_url: 'https://spoonacular.com/recipeImages/marie-rose-sauce-2-146992.jpg',
      prep_time: '2',
      instructions: 'http://www.food.com/recipe/marie-rose-sauce-91120',
      credit_text: 'Food.com',
      likes: '7',
      servings: '1'
    }), knex('recipes').insert({
      id: 4,
      title: 'Roasted Tomatillo-Poblano Salsa',
      img_url: 'https://spoonacular.com/recipeImages/Roasted-Tomatillo-Poblano-Salsa-166992.jpg',
      prep_time: '50',
      instructions: 'https://www.bettycrocker.com/recipes/roasted-tomatillo-poblano-salsa/f771a88c-066c-4067-a16a-1547c8dc9927',
      credit_text: 'Betty Crocker',
      likes: '0',
      servings: '12'
    }), knex('recipes').insert({
      id: 5,
      title: 'Creamed Spinach',
      img_url: 'https://spoonacular.com/recipeImages/Creamed-Spinach-396992.jpeg',
      prep_time: '15',
      instructions: 'http://www.foodnetwork.com/recipes/claire-robinson/creamed-spinach-recipe.html',
      credit_text: 'Foodnetwork',
      likes: '2',
      servings: '4'
    }), knex('recipes').insert({
      id: 6,
      title: 'Grilled Grouper with Mango Butter',
      img_url: 'https://spoonacular.com/recipeImages/Grilled-Grouper-with-Mango-Butter-256992.jpg',
      prep_time: '45',
      instructions: 'http://allrecipes.com/Recipe/Grilled-Grouper-with-Mango-Butter/Detail.aspx',
      credit_text: 'Allrecipes',
      likes: '47',
      servings: '4'
    }), knex('recipes').insert({
      id: 7,
      title: 'Apple Puran Poli',
      img_url: 'https://spoonacular.com/recipeImages/Apple-Puran-Poli-246992.jpg',
      prep_time: '25',
      instructions: 'http://www.egglesscooking.com/2008/06/27/apple-puran-poli/',
      credit_text: 'Eggless Cooking',
      likes: '9',
      servings: '4'
    }), knex('recipes').insert({
      id: 8,
      title: 'Big Batch Oatmeal Raisin Cookies',
      img_url: 'https://spoonacular.com/recipeImages/Big-Batch-Oatmeal-Raisin-Cookies-246892.jpg',
      prep_time: '38',
      instructions: 'http://www.egglesscooking.com/2011/12/20/big-batch-oatmeal-raisin-cookies/',
      credit_text: 'Eggless Cooking',
      likes: '59',
      servings: '108'
    }), knex('recipes').insert({
      id: 9,
      title: 'Rotini Salad with Kalamata Olive Dressing',
      img_url: 'https://spoonacular.com/recipeImages/Rotini-Salad-with-Kalamata-Olive-Dressing-246882.jpg',
      prep_time: '45',
      instructions: 'http://www.myrecipes.com/m/recipe/rotini-salad-with-kalamata-olive-dressing-10000001206171/',
      credit_text: 'My Recipes',
      likes: '13',
      servings: '7'
    }), knex('recipes').insert({
      id: 10,
      title: 'Cedar Plank-Grilled Salmon with Mango Kiwi Salsa',
      img_url: 'https://spoonacular.com/recipeImages/Cedar-Plank-Grilled-Salmon-with-Mango-Kiwi-Salsa-246282.jpg',
      prep_time: '25',
      instructions: 'http://www.myrecipes.com/recipe/cedar-plank-grilled-salmon-50400000122082',
      credit_text: 'My Recipes',
      likes: '0',
      servings: '4'
    }), knex('recipes').insert({
      id: 11,
      title: 'Pork Chops With Mushroom Cream Sauce - Low Carb',
      img_url: 'https://spoonacular.com/recipeImages/pork-chops-with-mushroom-cream-sauce-low-carb-2-146282.jpg',
      prep_time: '75',
      instructions: 'http://www.food.com/recipe/pork-chops-with-mushroom-cream-sauce-low-carb-224960',
      credit_text: 'Food.com',
      likes: '24',
      servings: '4'
    }), knex('recipes').insert({
      id: 12,
      title: 'Char-Grilled Beef Tenderloin with Three-Herb Chimichurri',
      img_url: 'https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg',
      prep_time: '45',
      instructions: 'http://www.epicurious.com/recipes/food/views/Char-Grilled-Beef-Tenderloin-with-Three-Herb-Chimichurri-235342',
      credit_text: 'Epicurious',
      likes: '0',
      servings: '10'
    }), knex('recipes').insert({
      id: 13,
      title: 'Fried Anchovies With Sage',
      img_url: 'https://spoonacular.com/recipeImages/fried_anchovies_with_sage-1.jpg',
      prep_time: '60',
      instructions: 'http://latavolamarcherecipebox.blogspot.com/2009/10/fried-anchovies-with-sage.html',
      credit_text: 'undefined',
      likes: '1',
      servings: '0'
    }), knex('recipes').insert({
      id: 14,
      title: 'Anchovies With Breadcrumbs & Scallions',
      img_url: 'https://spoonacular.com/recipeImages/anchovies_with_breadcrumbs_scallions-2.jpg',
      prep_time: '18',
      instructions: 'http://www.thekitchn.com/other-two-veg-recipes-notes-85779',
      credit_text: 'undefined',
      likes: '0',
      servings: '8'
    }), knex('recipes').insert({
      id: 15,
      title: 'Carrots, Cauliflower And Anchovies',
      img_url: 'https://spoonacular.com/recipeImages/carrots-cauliflower-and-anchovies-2-3.jpg',
      prep_time: '45',
      instructions: 'http://saladpride.blogspot.com/2011/06/carrots-cauliflower-and-anchovies.html',
      credit_text: 'undefined',
      likes: '0',
      servings: '1'
    }), knex('recipes').insert({
      id: 16,
      title: 'Stir Fried Anchovies (myulchi Bokkeum)',
      img_url: 'https://spoonacular.com/recipeImages/stir_fried_anchovies-4.jpg',
      prep_time: '4',
      instructions: 'http://bapstory.blogspot.com/2011/08/stir-fried-anchovies-myulchi-bokkeum.html',
      credit_text: 'undefined',
      likes: '11',
      servings: '0'
    }), knex('recipes').insert({
      id: 17,
      title: 'Bread, Butter And Anchovies',
      img_url: 'https://spoonacular.com/recipeImages/bread_butter_and_anchovies-5.jpg',
      prep_time: '3',
      instructions: 'http://en.julskitchen.com/tuscany/grandma-mennas-kitchen-bread-butter-and-anchovies',
      credit_text: 'Juls Kitchen',
      likes: '0',
      servings: '0'
    }), knex('recipes').insert({
      id: 18,
      title: 'Fried Anchovies',
      img_url: 'https://spoonacular.com/recipeImages/fried_anchovies-6.jpg',
      prep_time: '15',
      instructions: 'http://www.sippitysup.com/fried-anchovies',
      credit_text: 'SippitySup',
      likes: '0',
      servings: '4'
    }), knex('recipes').insert({
      id: 19,
      title: 'Tomato & Anchovies With Bread Crumbs, Basil & Red Onion   Recip',
      img_url: 'https://spoonacular.com/recipeImages/tomato_anchovies_with_bread_crumbs_basil_red_onion_recip-7.jpg',
      prep_time: '45',
      instructions: 'http://www.thekitchn.com/tomato-and-anchovies-with-breadcrumbs-63500',
      credit_text: 'undefined',
      likes: '31',
      servings: '1'
    }), knex('recipes').insert({
      id: 20,
      title: 'Orecchiette, Broccoli Raab & Anchovies',
      img_url: 'https://spoonacular.com/recipeImages/orecchiette-broccoli-raab-anchovies-2-8.jpg',
      prep_time: '45',
      instructions: 'http://www.finecooking.com/recipes/orecchiette-broccoli-raab-anchovies.aspx ',
      credit_text: 'undefined',
      likes: '1',
      servings: '4'
    })
  );
};
