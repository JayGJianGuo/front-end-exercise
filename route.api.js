var express = require('express');
var router = express.Router();

/* GET users lists. */
router.get('/users', function(req, res, next){
    res.send('respond with a resource');
});

/* GET posts lists */
router.get('/posts', function(req, res, next){
    res.json({ postsList: ['Post1', 'Post2', 'Post3']});
});

/* POST posts */
router.post('/posts/create', function(req, res, next){
    var title = req.body.title;
    var content = req.body.content;
    res.send({ title, content });
});

module.exports = router;