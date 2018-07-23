/**
 * Created by wei on 18-7-23.
 */
'use strict';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;