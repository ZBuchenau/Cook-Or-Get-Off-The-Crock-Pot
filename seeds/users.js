'use strict';
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, username: 'keenan', password: '$2a$10$UVb6grKkyAaXzcgZjdQ4ROUtYFYwL3iHFC/A9DHdATtCDMlU0xvY6'}),
    knex('users').insert({id: 2, username: 'zack', password: '$2a$10$/fHSD3C0VHZByxrFHuRV9eevUuEtf0u16N4.tkHAPYsR.g/oYhO0q'}),
    knex('users').insert({id: 3, username: 'brandon', password: '$2a$10$v0v3GruwlePNME2nQW2H/.6PiNS4CPV/J/ntXTpOzcMCPWDbCii8m'}),
    knex('users').insert({id: 4, username: 'james', password: '$2a$10$dUKaWKJT8vExXnFGIuWwa.ksxW1mIAzkjN/9jnJpKfho0HY/9mM8y'})
  );
};
