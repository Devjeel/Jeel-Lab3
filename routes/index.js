'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/bhavya', function (req, res) {
    res.render('bhavya', { title: 'Bhavya' });
});

router.get('/jeel', function (req, res) {
    res.render('Jeel', { title: 'Jeel' });
});

router.get('/hits', function (req, res) {
    res.render('Hits', { title: 'Hits' });
});

router.get('/pina', function (req, res) {
    res.render('Pina', { title: 'Pina' });
});

module.exports = router;
