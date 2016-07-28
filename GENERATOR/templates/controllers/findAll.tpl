exports.find<%Name%>All = function (req, res) {
    log.info('Retrieving All <%name%>\'s:');
    var collection = db.get().collection('<%name%>');
    collection.find().toArray(function (err, items) {
        if (err) {
            log.info(err);
        }
        res.json(items);
    });
}

