var express = require('express');
var router = express.Router();
var {contactSection} = require('./../lang/language.json');/*
var multilang = require('../utils/convert_lang.js')();*/

/* GET users listing. */
router.get('/', function(req, res, next) {
    var docService = require('../controllers/Services/generateDocument.js');
    docService.generateDocument(req, res);
});

module.exports = router;
