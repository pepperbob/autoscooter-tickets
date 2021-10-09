var generator = require("../ticketgenerator")
var express = require('express');
var router = express.Router();

router.post('/generate', function(req, res, next) {
  res.send(generator.generate(req.body));
});

router.post('/validate', function(req, res, next) {
  res.send(generator.validate(req.body));
});

module.exports = router;
