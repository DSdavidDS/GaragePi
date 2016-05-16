var express = require('express');
var router = express.Router();

var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/openGarage', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/openGarage', function(req, res) {
    exec('printf test');
    exec('python ~/garage_gpio.py');
    console.log("success");
});

module.exports = router;
