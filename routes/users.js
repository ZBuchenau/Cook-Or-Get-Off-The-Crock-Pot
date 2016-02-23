require('dotenv').load();
var express = require('express');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.post('/authenticate', function(req, res) {


  // knex('users')
  //   .select('password')
  //   .where(username, req.body.username)
  //   .then(function(user) {
  //
  //   });

  if (!(req.body.username === 'john.doe' && req.body.password === 'foobar')) {
    res.json(401, 'Wrong user or password');
  }
  var profile = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com',
    id: 123
  };
  // Set up the JSON Web Token
  var token = jwt.sign(profile, process.env.SECRET, {
    expiresInMinutes: 60 * 24
  });
  // Send the JSON Web Token
  res.json({
    token: token
  });
});

router.get('/:userId', function(req, res, next) {
  res.json('API Users');
});

router.get('/:userId/prefs', function(req, res, next) {
  res.json('API Users');
});

router.get('/:userId/plan', function(req, res, next) {
  res.json('API Users');
});

module.exports = router;
