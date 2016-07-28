exports.delete<%Name%> = function (req, res) {
    var id = req.params.id;
    console.log('Deleting <%name%>: ' + id);
    var collection = db.get().collection('<%name%>');
         collection.remove({'_id': new ObjectID(id)}, {safe: true}, function (err, result) {
            if (err) {
                res.send({'error': 'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.json(result);
            }
        });
}

