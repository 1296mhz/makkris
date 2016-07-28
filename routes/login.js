/**
 * Created by cshlovjah on 14.07.16.
 */
var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function (req, res) {

    if (!req.user) {
        var answer = {
            user: req.user,
            loggedIn: false,
            title: "Авторизуйтесь!"
        };
        
        //res.json(answer)
        res.render('login', {user: req.user, title: "Авторизуйтесь"});

    }
    else {
        var answer = {
            user: req.user,
            loggedIn: true,
            title: "Панель управления"
        };
        res.json(answer)
        }
});


router.post('/', passport.authenticate('local'), function (req, res) {
    console.log("Ваш пользователь: " + req.user.username);

    var role;
    if (req.user) {
        req.session.save(function (err) {
            if (err) {
            }
            return;
        });
        role = req.user.role;
    }
    res.redirect('/');
});


module.exports = router;