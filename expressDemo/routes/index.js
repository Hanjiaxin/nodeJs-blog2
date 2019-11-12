var express = require('express');
var router = express.Router();
var dataStr = require('../data.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login');
});
router.get('/list', function (req, res, next) {
    res.render('list');
});
router.post('/record', function (req, res, next) {
    if (req.body.username == dataStr.users[0].username && req.body.pwd == dataStr.users[0].password) {
        res.render('list',{dataStr});
    }
    else{
        res.write("<head><meta charset=\"UTF-8\"></head>")
        res.end("用户名、密码错误！请重新输入");
    }
})
module.exports = router;
