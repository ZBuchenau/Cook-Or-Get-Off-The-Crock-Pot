require('dotenv').load();
var express = require('express');
var bcrypt = require('bcrypt');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.post('/authenticate', function(req, res) {
  var hash = bcrypt.hashSync(req.body.password, 11);
  console.log(hash);
  console.log(bcrypt.compareSync('foobar', hash));
  knex('users')
    .select('*')
    .where(username, req.body.username)
    .then(function(info) {
      var password = info[0].password;
      var hash = bcrypt.hashSync(req.body.password, 11);
      bcrypt.compareSync(password, hash);
    });

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
    expiresIn: 60 * 5
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
