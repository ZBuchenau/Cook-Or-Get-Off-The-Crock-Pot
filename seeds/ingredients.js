'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('table_name').del(),
    knex('ingredients').insert({ name: 'string', aisle : 'string'})

  );
};
