var express = require('express');
var router = express.Router();

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
