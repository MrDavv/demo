'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/test', function(req, res, next) {
  console.log(decodeURIComponent(req.body.str));
  res.send('sadfasdf');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
