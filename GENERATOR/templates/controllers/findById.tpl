exports.find<%Name%>ById = function (req, res) {
    var id = req.params.id;
    log.info('Retrieving <%name%> by id: ' + id);
    var collection = db.get().collection('<%name%>');

        collection.find({'_id': new ObjectID(id)}).toArray(function (err, item) {
            if (err) {
                log.info(err);
            }
            res.json(item)
        });
}

