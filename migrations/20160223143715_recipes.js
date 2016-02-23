
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table){
    table.increments('id');
    table.string('title');//title
    table.string('img_url');//image
    table.string('prep_time');//readyInMinutes
    table.string('instructions');//sourceURL
    table.string('credit_text');//creditText(author of the recipe)
    table.integer('likes');//aggregatedLikes
    table.integer('servings');//servings
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
