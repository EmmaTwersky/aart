var express = require('express');
var router = express.Router();
const rp = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  rp(`https://www.rijksmuseum.nl/api/en/collection?key=fpGQTuED&ps=30&type=painting&f.normalized32Colors.hex=%232F4F4F&format=json`)
    .then(function (results) {
      res.render('main/scrollingArt', {
        works: JSON.parse(results)
      });
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
