var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('show all users');
});

router.get('/:userId', function(req, res, next) {
  res.send('show a user' + ': ' + req.params.userId);
});

router.post('/', function(req, res, next) {
  console.log(JSON.stringify(req.params));
  res.send('create a user');
});

router.put('/', function(req, res, next) {
  res.send('put a user');
});

router.patch('/', function(req, res, next) {
  res.send('patch a user');
});

router.delete('/', function(req, res, next) {
  res.send('deactivate a user');
});

module.exports = router;
