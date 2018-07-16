var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express Index'});
});

/* GET posts page. */
router.get('/posts', function(req, res, next){
    res.render('posts', { title: 'Posts'});
});

module.exports = router;