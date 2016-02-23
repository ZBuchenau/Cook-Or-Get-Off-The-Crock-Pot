var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json('API Users');
});

module.exports = router;
