
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(table){

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
