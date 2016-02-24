
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(table){
    table.increments('id');
    table.integer('recipe_id'); //.unsigned().foreign().references('id').inTable('recipes');
    table.integer('ingredient_id'); //.unsigned().foreign().references('id').inTable('ingredients');
    table.decimal('amount');
    table.string('unit');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients');
};





//
// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('recipe_ingredients', function(table){
//     table.increments('id');
//     table.integer('recipe_id');
//     table.integer('ingredient_id');
//     table.integer('amount');
//     table.string('unit');
//   });
// };
//
// exports.down = function(knex, Promise) {
//   return knex.schema.dropTable('recipe_ingredients');
// };
