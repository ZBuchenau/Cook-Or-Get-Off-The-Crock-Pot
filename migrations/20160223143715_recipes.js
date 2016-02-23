
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table){

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
