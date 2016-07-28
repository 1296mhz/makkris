exports.add<%Name%> = function (req, res) {
    var <%name%> = req.body;
    log.info('Adding resources new <%name%>');
    var createOwner = <%name%>.createOwner;
    <%name%>.createOwner = '';
    <%name%>.createOwner = new ObjectID(createOwner);
    <%name%>.createDate = utilz.nowDate();

    var collection = db.get().collection('<%name%>');
        collection.insert(<%name%>, function (err, result) {
            if (err) {
                log.info(err);
            }
            log.info(JSON.stringify(result.result));
            res.json(result.result);
        });
}

