'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
      // Deletes ALL existing entries
      knex('table_name').del(),

      // Inserts seed entries
      knex('recipes').insert({
        'title': "title",
        'img_url': "image",
        'prep_time': "readyInMinutes",
        'instructions': "sourceUrl",
        'credit_text': "creditText",
        'likes': "aggregatedLikes",
        "servings": "servings"
      }),
      knex('recipes').insert({
        title: 'Char-Grilled Beef Tenderloin with Three-Herb Chimichurri',
        img_url: 'https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg',
        prep_time: '45',
        instructions: 'http://www.epicurious.com/recipes/food/views/Char-Grilled-Beef-Tenderloin-with-Three-Herb-Chimichurri-235342',
        credit_text: 'Epicurious',
        likes: 'undefined',
        servings: '10'
      }), knex('recipes').insert({
        title: 'Fried Anchovies With Sage',
        img_url: 'https://spoonacular.com/recipeImages/fried_anchovies_with_sage-1.jpg',
        prep_time: '60',
        instructions: 'http://latavolamarcherecipebox.blogspot.com/2009/10/fried-anchovies-with-sage.html',
        credit_text: 'undefined',
        likes: '1',
        servings: 'undefined'
      }), knex('recipes').insert({
        title: 'Anchovies With Breadcrumbs & Scallions',
        img_url: 'https://spoonacular.com/recipeImages/anchovies_with_breadcrumbs_scallions-2.jpg',
        prep_time: '18',
        instructions: 'http://www.thekitchn.com/other-two-veg-recipes-notes-85779',
        credit_text: 'undefined',
        likes: 'undefined',
        servings: '8'
      }), knex('recipes').insert({
        title: 'Carrots, Cauliflower And Anchovies',
        img_url: 'https://spoonacular.com/recipeImages/carrots-cauliflower-and-anchovies-2-3.jpg',
        prep_time: '45',
        instructions: 'http://saladpride.blogspot.com/2011/06/carrots-cauliflower-and-anchovies.html',
        credit_text: 'undefined',
        likes: 'undefined',
        servings: '1'
      }), knex('recipes').insert({
        title: 'Stir Fried Anchovies (myulchi Bokkeum)',
        img_url: 'https://spoonacular.com/recipeImages/stir_fried_anchovies-4.jpg',
        prep_time: '4',
        instructions: 'http://bapstory.blogspot.com/2011/08/stir-fried-anchovies-myulchi-bokkeum.html',
        credit_text: 'undefined',
        likes: '11',
        servings: 'undefined'
      }), knex('recipes').insert({
        title: 'Bread, Butter And Anchovies',
        img_url: 'https://spoonacular.com/recipeImages/bread_butter_and_anchovies-5.jpg',
        prep_time: '3',
        instructions: 'http://en.julskitchen.com/tuscany/grandma-mennas-kitchen-bread-butter-and-anchovies',
        credit_text: 'Juls Kitchen ',
        likes: 'undefined ',
        servings: 'undefined '
      }),
      knex('
        recipes ').insert({ title:'
        Fried Anchovies ', img_url : '
        https: //spoonacular.com/recipeImages/fried_anchovies-6.jpg',
        prep_time: '15', instructions: 'http://www.sippitysup.com/fried-anchovies', credit_text: 'SippitySup', likes: 'undefined', servings: '4'
      }),
    knex('recipes').insert({
      title: 'Tomato & Anchovies With Bread Crumbs, Basil & Red Onion   Recip',
      img_url: 'https://spoonacular.com/recipeImages/tomato_anchovies_with_bread_crumbs_basil_red_onion_recip-7.jpg',
      prep_time: '45',
      instructions: 'http://www.thekitchn.com/tomato-and-anchovies-with-breadcrumbs-63500',
      credit_text: 'undefined',
      likes: '31',
      servings: '1'
    }),
    knex('recipes').insert({
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
