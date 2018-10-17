var express = require('express');
var router = express.Router();
var {simpleIntro} = require('./../lang/language.json');
var multilang = require('../utils/convert_lang.js')();

var simple = require('./../lang/language.json');
/*
var {name} = {
  name :"jay",
    last:"verma"
}

let namej = multilang(simpleIntro.fa, {name:name});
console.log(namej);
console.log("simpleIntro:"+JSON.stringify(simpleIntro));
console.log("simple:"+JSON.stringify(simple));*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
