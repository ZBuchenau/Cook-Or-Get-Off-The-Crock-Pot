'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, username: 'keenan', password: '$2a$10$nN/AoVdaLQN8xuPWTb72TOzlCX05RMHVQxKBMWaMyQnEOceYBlljO'}),
    knex('users').insert({id: 2, username: 'zack', password: '$2a$10$9QGeKhenH/2drkR6zPohQuPm/jGKB7hmPJS5eH4O.je/my4xPosjq'}),
    knex('users').insert({id: 3, username: 'brandon', password: '$2a$10$EkAEyWUk5wu0XDzcA1Uyxuc/Bo.4Goc342uhd7/9JXMYY.Cg.D8xW'}),
    knex('users').insert({id: 4, username: 'james', password: '$2a$10$TpsSi4MWLPfX7GXB8.75O.IPqqh1q8dNpBdLJvyaR2FRxetZeSixi'})
  );
};
