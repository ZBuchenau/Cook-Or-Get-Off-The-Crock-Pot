
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(table){

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients');
};
