require('dotenv').load();
var express = require('express');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var accounts = require('../local_modules/accounts')();
var router = express.Router();

router.post('/signup', function(req, res, next) {
  var unhashedPassword = req.body.password;
  // var validPassword = accounts.validPassword(unhashedPassword);
  accounts.validUsername(req.body)
    .then(accounts.validPassword)
    .then(accounts.hash)
    .then(function(submission) {
      //Submission is Valid
      knex('users').insert(submission).then(function() {
        res.json('success');
      }).catch(function(error) {
        console.log(error);
      });
    })
    .catch(function(error) {
      //Submission is Invalid
      res.json(error);
    });
  // if (validPassword) {
  //   accounts.hash(unhashedPassword).then(function(hashedPassword) {
  //     req.body.password = hashedPassword;
  //   });
  // } else {
  //   res.json('invalid password');
  // }
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

router.get('/:userId/prefs', function(req, res, next) {
  res.json('API Users');
});

router.get('/:userId/plan', function(req, res, next) {
  res.json('API Users');
});

module.exports = router;
