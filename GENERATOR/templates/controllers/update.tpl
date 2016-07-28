exports.update<%Name%> = function (req, res) {
    var id = req.params.id;
    var <%name%> = req.body;
    console.log('Updating <%name%>: ' + id);
    console.log('\n');

    var <%name%> = {};
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
    <%name%>.updateDate = utilz.nowDate();

    log.info("Клиент: " + JSON.stringify(<%name%>));
    var idString = new ObjectID(id);

    var collection = db.get().collection('<%name%>');
        collection.update({'_id': idString}, {
            $set: <%name%>
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

