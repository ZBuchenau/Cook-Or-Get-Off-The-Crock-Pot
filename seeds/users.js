'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, username: 'keenan', password: '$2a$11$LmjiP81iid2EcpPoU1b0beBslPPyBsAgRQIfdsoj0B3kPYrhT0zDC'}),
    knex('users').insert({id: 2, username: 'zack', password: ''}),
    knex('users').insert({id: 3, username: 'brandon', password: ''}),
    knex('users').insert({id: 4, username: 'james', password: ''})
  );
};
