require('dotenv').load();
var express = require('express');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var accounts = require('../local_modules/accounts')();
var router = express.Router();

var jwtCheck = expressJwt({
  secret: process.env.SECRET
});

router.use('/protected', jwtCheck);

router.get('/protected/prefs', function(req, res, next) {
  res.json('API Users');
});

router.get('/protected/plan', function(req, res, next) {
  res.json('API Plan');
});

router.post('/signup', function(req, res, next) {
  console.log(req.body);
  var unhashedPassword = req.body.password;
  accounts.validUsername(req.body)
    .then(accounts.validPassword)
    .then(accounts.hash)
    .then(function(submission) {
      //Submission is Valid
      submission.access = 'user';
      knex('users').insert(submission).then(function() {
        res.json('success');
      }).catch(function(error) {
        console.log(error);
      });
    })
    .catch(function(message) {
      //Submission is Invalid
      res.json('error');
    });
});

router.post('/authenticate', function(req, res) {
  accounts.authenticate(req.body).then(function(user) {
    if (user) {
      var token = jwt.sign(user, process.env.SECRET, {
        expiresIn: 60 * 5
      });
      res.json({
        token: token,
      });
    } else {
      res.json('invalid');
    }
  }).catch(function(error) {
    res.json(error);
  });
});

router.get('/:userId', function(req, res, next) {
  res.json('API Users');
});

module.exports = router;
