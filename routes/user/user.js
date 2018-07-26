'use strict';

const express = require('express');
const crypto=require('crypto');
const router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
    console.log(req);
});

module.exports = router;
