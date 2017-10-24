var express = require('express');
var router = express.Router();
var authenticate = require('services/authenticate.js');

router.get('/credentials', function(req, res, next) {
  authenticate.authWithCreds();
  res.send('auth with creds');
});

router.get('/token', function(req, res, next) {
  authenticate.authWithToken();
  res.send('auth with token');
});

module.exports = router;
