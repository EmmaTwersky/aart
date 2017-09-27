var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('search results');
});

/* GET users listing. */
router.get('/advanced', function(req, res, next) {
  res.send('advanced search results');
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('search submitted');
});

module.exports = router;
