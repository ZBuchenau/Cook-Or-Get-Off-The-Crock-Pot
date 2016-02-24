
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(table){
    table.increments('id');
    table.integer('recipe_id'); //REFERENCES recipes ('id');
    table.integer('ingredient_id'); //REFERENCES ingredients ('id');
    table.integer('amount');
    table.string('unit');
    //PRIMARY_KEY ('id', 'id');
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
