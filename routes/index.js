var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json('API Home');
});

router.get('/signup', function(req, res, next) {
  res.json('API /signup');
});

module.exports = router;
