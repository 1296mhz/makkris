var mongo = require('mongodb');

var _ = require('underscore');
var Server = mongo.Server,
    Db = mongo.Db;
var log = require('../../libs/log')(module);
var ObjectID = require('mongodb').ObjectID;
var server = new Server('localhost', 27017, {auto_reconnect: true});
var Account = require('../../models/account');
var Utilz = require('../../libs/Utilz')
var utilz = new Utilz();
db = new Db('makkris', server);


db.open(function (err, db) {
    if (!err) {
        console.log("Connected to 'makkris' database");
        db.collection('customer', {strict: true}, function (err, collection) {
            if (err) {
                console.log("The 'makkris' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function () {

    var resources = [
        {"id": "a", "title": "Бокс №1", "description": "Развал схождение, вибростенд", "createDate": utilz.nowDate()},
        {
            "id": "b",
            "title": "Бокс №2",
            "description": "Неизвестно",
            "eventColor": "green",
            "createDate": utilz.nowDate()
        },
        {
            "id": "c",
            "title": "Бокс №3",
            "description": "Неизвестно",
            "eventColor": "orange",
            "createDate": utilz.nowDate()
        },
        {
            "id": "d", "title": "Бокс №4", "description": "Неизвестно", "createDate": utilz.nowDate(), "children": [
            {"id": "d1", "title": "Room D1", "description": "Неизвестно", "createDate": utilz.nowDate()},
            {"id": "d2", "title": "Room D2", "description": "Неизвестно", "createDate": utilz.nowDate()}
        ]
        },
        {"id": "e", "title": "Бокс №5", "description": "Неизвестно", "createDate": utilz.nowDate()},
        {
            "id": "f",
            "title": "Бокс №6",
            "description": "Неизвестно",
            "eventColor": "red",
            "createDate": utilz.nowDate()
        },
        {"id": "g", "title": "Бокс №7", "description": "Неизвестно", "createDate": utilz.nowDate()},
        {"id": "h", "title": "Бокс №8", "description": "Неизвестно", "createDate": utilz.nowDate()}
    ];

    var createOwner = new ObjectID("5788786c9023171f18b9a486")

    var customer = [
        {
            "name": "Петров Денис Васильевич",
            "phone": "89674325656",
            "vin": "UI78GT53DFRT56479",
            "DriverLicenseNumber": "з324ку96",
            "Mileage": "100002",
            "createOwner": createOwner,
            "createDate" : utilz.nowDate()
        }
    ]

    db.collection('customer', function (err, collection) {
        collection.insert(customer, {safe: true}, function (err, result) {
        });
    });
    
    /*
    db.collection('resources', function (err, collection) {
        collection.insert(resources, {safe: true}, function (err, result) {
        });
    });
    */
};