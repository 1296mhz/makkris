var db = require('../libs/mongodriver');
var log = require('../libs/log')(module);
var ObjectID = require('mongodb').ObjectID;
var _ = require('underscore');
var Utilz = require('../libs/Utilz');
var utilz = new Utilz();

exports.findStatusAll = function (req, res) {
    log.info('Retrieving All status\'s:');
    var collection = db.get().collection('status');
    collection.find().toArray(function (err, items) {
        if (err) {
            log.info(err);
        }
        res.json(items);
    });
}

exports.findStatusById = function (req, res) {
    var id = req.params.id;
    log.info('Retrieving status by id: ' + id);
    var collection = db.get().collection('status');

        collection.find({'_id': new ObjectID(id)}).toArray(function (err, item) {
            if (err) {
                log.info(err);
            }
            res.json(item)
        });
}

exports.addStatus = function (req, res) {
    var status = req.body;
    log.info('Adding resources new status');
    var createOwner = status.createOwner;
    status.createOwner = '';
    status.createOwner = new ObjectID(createOwner);
    status.createDate = utilz.nowDate();

    var collection = db.get().collection('status');
        collection.insert(status, function (err, result) {
            if (err) {
                log.info(err);
            }
            log.info(JSON.stringify(result.result));
            res.json(result.result);
        });
}

exports.updateStatus = function (req, res) {
    var id = req.params.id;
    var status = req.body;
    console.log('Updating status: ' + id);
    console.log('\n');

    var status = {};
    if (req.body.name != undefined) {
        customer.name = req.body.name
    }
    if (req.body.phone != undefined) {
        customer.phone = req.body.phone
    }
    if (req.body.vin != undefined) {
        customer.vin = req.body.vin
    }
    if (req.body.vin != undefined) {
        customer.vin = req.body.vin
    }
    if (req.body.DriverLicenseNumber != undefined) {
        customer.DriverLicenseNumber = req.body.DriverLicenseNumber
    }
    if (req.body.Mileage != undefined) {
        customer.Mileage = req.body.Mileage
    }
    if (req.body.createOwner != undefined) {
        customer.createOwner = req.body.createOwner
    }
    if (req.body.createDate != undefined) {
        customer.createDate = req.body.createDate
    }
    status.updateDate = utilz.nowDate();

    log.info("Клиент: " + JSON.stringify(status));
    var idString = new ObjectID(id);

    var collection = db.get().collection('status');
        collection.update({'_id': idString}, {
            $set: status
        }, function (err, result) {
            if (err) {
                log.info(err);
                log.info(result);
                res.json(err);
            } else {
                res.json(result);
            }
        });
}

exports.deleteStatus = function (req, res) {
    var id = req.params.id;
    console.log('Deleting status: ' + id);
    var collection = db.get().collection('status');
         collection.remove({'_id': new ObjectID(id)}, {safe: true}, function (err, result) {
            if (err) {
                res.send({'error': 'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.json(result);
            }
        });
}

