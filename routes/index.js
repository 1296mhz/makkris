var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  console.log(req.user);
  if (!req.user) {
    res.render('login', {user: req.user, title: "Авторизуйтесь"});
  }
  else {
    res.render('index', {user: req.user, title: "Панель управления"});
  }
});
module.exports = router;
