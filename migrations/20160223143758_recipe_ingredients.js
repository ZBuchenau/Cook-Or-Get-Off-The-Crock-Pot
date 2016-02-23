
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(table){
    table.increments('id');
    table.integer('recipe_id');
    table.integer('ingredient_id');
    table.integer('amount');
    table.string('unit');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients');
};
