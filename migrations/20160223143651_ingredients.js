
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(table){
    table.increments('id');
    table.string('name');
    table.string('aisle');//aisle
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
