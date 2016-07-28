$('')

Backbone.Model.prototype.idAttribute = '_id';

// Backbone Model

var User = Backbone.Model.extend({
   // urlRoot: "/user",
    initialize: function () {
    },
    defaults: {
        username: null,
        password: "123",
        group: null,
        boxId: null,
        fio: null,
        status: null,
        description: null,
        createDate: null,
        updateDate: null,
        createOwner: null,
        updateOwner: null
    }
});

// Backbone Collection

var Users = Backbone.Collection.extend({
    url: '/user'
});

var users = new Users();

