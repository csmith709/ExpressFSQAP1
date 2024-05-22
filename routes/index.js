var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Pass additional data to the template
  res.render('index', { title: 'Express', date: new Date() });
});

module.exports = router;

