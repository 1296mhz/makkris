var db = require('../libs/mongodriver');
var log = require('../libs/log')(module);
var ObjectID = require('mongodb').ObjectID;
var _ = require('underscore');
var Utilz = require('../libs/Utilz');
var utilz = new Utilz();

exports.findStatusAll = function (req, res) {
    log.info('Retrieving All status\'s:');
    var status = {
        administrators: "Администраторы",
        managers: "Менеджеры",
        smith: "Автослесаря"
    }
    res.json(status);

}


